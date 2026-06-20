#!/usr/bin/env node

import http from 'node:http';
import https from 'node:https';
import { Resolver } from 'node:dns/promises';

const publicDnsResolver = new Resolver();
publicDnsResolver.setServers(['1.1.1.1', '8.8.8.8']);

const defaults = {
  base: process.env.MCP_TEST_BASE_URL ?? 'https://ai-assistant.manojmukherjee.co.in',
  mcpDemoOrigin: process.env.MCP_TEST_MCP_DEMO_ORIGIN ?? 'https://mcp-demo.manojmukherjee.co.in',
  publicMcpDemoOrigin: process.env.MCP_TEST_PUBLIC_MCP_DEMO_ORIGIN ?? 'https://mcp-demo.manojmukherjee.co.in',
  expectedApps: Number(process.env.MCP_TEST_EXPECTED_APPS ?? 10),
  allowLocalhost: process.env.MCP_TEST_ALLOW_LOCALHOST === 'true',
};

const args = parseArgs(process.argv.slice(2));
const base = trimTrailingSlash(args.base ?? defaults.base);
const mcpDemoOrigin = trimTrailingSlash(args['mcp-demo-origin'] ?? defaults.mcpDemoOrigin);
const publicMcpDemoOrigin = trimTrailingSlash(args['public-mcp-demo-origin'] ?? defaults.publicMcpDemoOrigin);
const expectedApps = Number(args['expected-apps'] ?? defaults.expectedApps);
const allowLocalhost = args['allow-localhost'] === true || defaults.allowLocalhost;
const acceptedResourceOrigins = Array.from(
  new Set([
    mcpDemoOrigin,
    ...(allowLocalhost ? [publicMcpDemoOrigin, 'http://localhost:5181', 'http://127.0.0.1:5181'] : []),
  ]),
);

const mcpPaths = ['/mcp', '/mcp/claude', '/mcp/openai', '/mcp/chatgpt'];
const requiredApps = [
  'customer',
  'billing',
  'analytics',
  'admin',
  'ai-assistant',
  'mcp-demo',
  'vue-commerce',
  'angular-ops',
  'design-system',
  'knowledge',
];
const assetChecks = new Map([
  ['customer', ['manifest.json', 'customer-app.css', 'customer-app.js']],
  ['billing', ['manifest.json', 'billing-app.css', 'billing-app.js']],
  ['analytics', ['manifest.json', 'analytics-app.css', 'analytics-app.js']],
  ['admin', ['manifest.json', 'admin-app.css', 'admin-app.js']],
  ['ai-assistant', ['manifest.json', 'ai-assistant-app.css', 'ai-assistant-app.js']],
  ['mcp-demo', ['manifest.json', 'mcp-demo-app.css', 'mcp-demo-app.js']],
  ['vue-commerce', ['manifest.json', 'vue-commerce-app.css', 'vue-commerce-app.js']],
  ['angular-ops', ['manifest.json', 'angular-ops-app.css', 'angular-ops-app.js']],
  ['design-system', ['manifest.json', 'design-system-app.css', 'design-system-app.js']],
]);

const checks = [];

await runCheck('healthz returns ok', async () => {
  const body = await getJson(`${base}/healthz`);
  assert(body.ok === true, 'healthz did not return ok=true');
  assert(body.publicMcpOrigin, 'healthz did not include publicMcpOrigin');
});

await runCheck('apps registry has expected apps', async () => {
  const body = await getJson(`${base}/apps`);
  const apps = Array.isArray(body.apps) ? body.apps : [];
  const ids = new Set(apps.map((app) => app.id));
  assert(apps.length >= expectedApps, `expected at least ${expectedApps} apps, got ${apps.length}`);
  for (const id of requiredApps) {
    assert(ids.has(id), `missing app ${id}`);
  }
});

await runCheck('all public app assets load', async () => {
  const body = await getJson(`${base}/apps`);
  const apps = Array.isArray(body.apps) ? body.apps : [];
  const failures = [];

  for (const app of apps) {
    const files = assetChecks.get(app.id);
    if (!files) continue;

    const origin = new URL(app.appPublicOrigin ?? app.manifest?.entryUrl ?? app.manifest?.manifestUrl);
    for (const file of files) {
      const url = new URL(`/${file}`, origin).toString();
      try {
        await assertHttpOk(`${url}?check=${Date.now()}`);
      } catch (error) {
        failures.push(`${app.id}/${file}: ${error.message}`);
      }
    }
  }

  assert(failures.length === 0, failures.join('; '));
});

await runCheck('mcp-demo resource uses public asset URLs', async () => {
  const html = await getText(`${base}/apps/mcp-demo/resource?check=${Date.now()}`);
  assert(
    acceptedResourceOrigins.some((origin) => html.includes(`${origin}/mcp-demo-app.js`)),
    `resource does not reference MCP demo JS from: ${acceptedResourceOrigins.join(', ')}`,
  );
  assert(
    acceptedResourceOrigins.some((origin) => html.includes(`${origin}/mcp-demo-app.css`)),
    `resource does not reference MCP demo CSS from: ${acceptedResourceOrigins.join(', ')}`,
  );
  assert(
    acceptedResourceOrigins.some((origin) => html.includes(`${origin}/manifest.json`)),
    `resource does not reference MCP demo manifest from: ${acceptedResourceOrigins.join(', ')}`,
  );
  if (!allowLocalhost) {
    assert(!/(localhost|127\.0\.0\.1)/.test(html), 'resource still contains localhost/127.0.0.1');
  }
});

await runCheck('mcp-demo public assets load', async () => {
  await assertHttpOk(`${mcpDemoOrigin}/manifest.json?check=${Date.now()}`);
  await assertHttpOk(`${mcpDemoOrigin}/mcp-demo-app.js?check=${Date.now()}`);
  await assertHttpOk(`${mcpDemoOrigin}/mcp-demo-app.css?check=${Date.now()}`);
});

for (const path of mcpPaths) {
  await runCheck(`${path} initialize succeeds`, async () => {
    const body = await postInitialize(`${base}${path}`);
    assert(body.includes('"capabilities"'), 'initialize response did not include capabilities');
    assert(body.includes('"serverInfo"'), 'initialize response did not include serverInfo');
  });
}

const failed = checks.filter((check) => !check.ok);

for (const check of checks) {
  const icon = check.ok ? 'ok' : 'fail';
  console.log(`${icon} ${check.name}${check.detail ? ` - ${check.detail}` : ''}`);
}

if (failed.length > 0) {
  console.error(`\n${failed.length} MCP check(s) failed.`);
  process.exit(1);
}

console.log(`\nAll MCP checks passed for ${base}`);

async function runCheck(name, fn) {
  try {
    await fn();
    checks.push({ name, ok: true });
  } catch (error) {
    checks.push({ name, ok: false, detail: error.message });
  }
}

async function getJson(url) {
  const response = await fetchWithDnsFallback(url, { headers: { accept: 'application/json' } });
  assert(response.ok, `${url} returned ${response.status}`);
  return response.json();
}

async function getText(url) {
  const response = await fetchWithDnsFallback(url);
  assert(response.ok, `${url} returned ${response.status}`);
  return response.text();
}

async function assertHttpOk(url) {
  const response = await fetchWithDnsFallback(url);
  assert(response.ok, `${url} returned ${response.status}`);
}

async function postInitialize(url) {
  const response = await fetchWithDnsFallback(url, {
    method: 'POST',
    headers: {
      accept: 'application/json, text/event-stream',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2025-06-18',
        capabilities: {},
        clientInfo: {
          name: 'open-micro-platform-check',
          version: '1.0.0',
        },
      },
    }),
  });
  assert(response.ok, `${url} returned ${response.status}`);
  return response.text();
}

async function fetchWithDnsFallback(url, options = {}) {
  try {
    return await fetch(url, options);
  } catch (error) {
    if (!shouldUsePublicDnsFallback(url, error)) {
      throw error;
    }
    return fetchViaResolvedPublicDns(url, options);
  }
}

function shouldUsePublicDnsFallback(url, error) {
  const { hostname, protocol } = new URL(url);
  const code = error?.cause?.code;
  return (
    (protocol === 'https:' || protocol === 'http:') &&
    hostname.endsWith('.manojmukherjee.co.in') &&
    (code === 'ENOTFOUND' || code === 'EAI_AGAIN' || error?.message === 'fetch failed')
  );
}

async function fetchViaResolvedPublicDns(url, options = {}) {
  const parsed = new URL(url);
  const addresses = await publicDnsResolver.resolve4(parsed.hostname);
  const client = parsed.protocol === 'http:' ? http : https;
  const body = options.body ? Buffer.from(String(options.body)) : undefined;

  return new Promise((resolve, reject) => {
    const request = client.request(
      parsed,
      {
        method: options.method ?? 'GET',
        headers: options.headers,
        servername: parsed.hostname,
        lookup: (_hostname, maybeOptions, maybeCallback) => {
          const callback = typeof maybeOptions === 'function' ? maybeOptions : maybeCallback;
          if (maybeOptions?.all) {
            callback(
              null,
              addresses.map((address) => ({ address, family: 4 })),
            );
            return;
          }
          callback(null, addresses[0], 4);
        },
      },
      (response) => {
        const chunks = [];
        response.on('data', (chunk) => chunks.push(chunk));
        response.on('end', () => {
          const text = Buffer.concat(chunks).toString('utf8');
          resolve({
            ok: response.statusCode >= 200 && response.statusCode < 300,
            status: response.statusCode,
            text: async () => text,
            json: async () => JSON.parse(text),
          });
        });
      },
    );

    request.on('error', reject);
    if (body) {
      request.write(body);
    }
    request.end();
  });
}

function parseArgs(rawArgs) {
  const parsed = {};
  for (let index = 0; index < rawArgs.length; index += 1) {
    const arg = rawArgs[index];
    if (!arg.startsWith('--')) continue;
    const key = arg.slice(2);
    const next = rawArgs[index + 1];
    if (!next || next.startsWith('--')) {
      parsed[key] = true;
      continue;
    }
    parsed[key] = next;
    index += 1;
  }
  return parsed;
}

function trimTrailingSlash(value) {
  return String(value).replace(/\/+$/, '');
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
