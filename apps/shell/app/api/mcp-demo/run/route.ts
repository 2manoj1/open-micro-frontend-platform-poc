import { NextResponse, type NextRequest } from 'next/server'

interface McpDemoRunRequest {
  scenario?: string
}

export async function POST(request: NextRequest) {
  let payload: McpDemoRunRequest = {}

  try {
    payload = await request.json() as McpDemoRunRequest
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
  }

  return NextResponse.json(createDemoResponse(payload.scenario), {
    headers: {
      'cache-control': 'no-store',
    },
  })
}

function createDemoResponse(scenario = 'billing-conversion-dip') {
  return {
    scenario,
    runtime: 'server-api',
    headline: 'Native AI generated a recovery UI',
    summary:
      'The MCP Apps demo completed outside a host model by using the portable API fallback. In ChatGPT or Claude, the same button first attempts model context, host sampling, and server tool calls.',
    actions: [
      { app: 'Admin', action: 'Enable billing-autopay through a 25% guarded rollout.', owner: 'Platform Admin' },
      { app: 'Billing', action: 'Review the overdue enterprise invoice and retry payment.', owner: 'Revenue Ops' },
      { app: 'Analytics', action: 'Track checkout recovery and payment failures for 24 hours.', owner: 'Data Platform' },
    ],
  }
}
