'use client';

import Link from 'next/link';
import { ArrowRight, Boxes, BrainCircuit, MessageSquareText, Network, PackageCheck, Radio, ServerCog, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { publicPlatformConfig } from '@/lib/public-platform-config';

export default function Page() {
  const capabilities = [
    { icon: Boxes, label: 'Runtime islands', text: 'Web Components, mount functions, iframes, and HTML fragments.' },
    { icon: ServerCog, label: 'RSC ready', text: 'Next.js shell can stream static, SSR, SSG, and ISR remotes.' },
    { icon: PackageCheck, label: 'Publishable SDK', text: 'Separate client, shell, and Next.js entrypoints for teams.' },
    { icon: BrainCircuit, label: 'AI native', text: 'Ready for assistant apps, tool surfaces, and MCP-style app manifests.' },
  ];

  const platformTenets = [
    { icon: Radio, label: 'Async event fabric', text: 'Shell-to-app and app-to-app communication moves through explicit events, not hidden imports.' },
    { icon: MessageSquareText, label: 'Runs beyond browser shells', text: 'The same manifest can describe UI, tools, resources, prompts, and host-provided context.' },
    { icon: ShieldCheck, label: 'Team-owned boundaries', text: 'Apps own BFFs, deployment, telemetry, rollback, and domain data.' },
  ];

  return (
    <main className="min-h-screen bg-[#f7f8fb] text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-6 sm:px-8">
        <header className="flex items-center justify-between border-b border-slate-200 pb-5 dark:border-slate-800">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-white dark:bg-white dark:text-slate-950">
              <Network className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>{publicPlatformConfig.shellName}</span>
          </Link>
          <Link href="/dashboard">
            <Button size="sm" className="gap-2 rounded-md">
              Dashboard
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
        </header>

        <section className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              <Sparkles className="h-4 w-4 text-cyan-600" aria-hidden="true" />
              Future-ready micro frontends without webpack MFE
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              A Next.js shell for self-deployable, AI-native micro apps.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Runtime apps can be React, Vue, Angular, static HTML, SSR, SSG, ISR, or isolated hosted experiences. The same app contract can work in a web shell or an MCPApps-compatible AI host.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/dashboard">
                <Button size="lg" className="gap-2 rounded-md px-5">
                  Open MVP Console
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
              <a
                className="inline-flex h-12 items-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                href="https://modelcontextprotocol.io"
                rel="noreferrer"
                target="_blank"
              >
                MCP-compatible direction
              </a>
            </div>
          </div>

          <div className="grid gap-3">
            {capabilities.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="text-base font-semibold">{item.label}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 py-10 dark:border-slate-800">
          <div className="mb-5 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">Built for the next frontend platform shift</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Instead of coupling every team to a bundler graph, the platform composes independently deployed capability surfaces through manifests, runtime URLs, and async events.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {platformTenets.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <item.icon className="mb-3 h-5 w-5 text-cyan-700 dark:text-cyan-300" aria-hidden="true" />
                <h3 className="font-semibold">{item.label}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
