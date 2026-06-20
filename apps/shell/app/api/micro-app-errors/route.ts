import { NextResponse, type NextRequest } from 'next/server'
import type { PlatformLogEntry } from '@openmf/core/observability'

export async function POST(request: NextRequest) {
  let entry: PlatformLogEntry

  try {
    entry = await request.json() as PlatformLogEntry
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid log payload' }, { status: 400 })
  }

  const appId = entry.appId ?? 'unknown-app'
  const source = entry.source ?? 'unknown-source'

  console.error(`[micro-app-error] ${appId} ${source}: ${entry.message}`, {
    error: entry.error,
    metadata: entry.metadata,
    timestamp: entry.timestamp,
  })

  return NextResponse.json({ ok: true })
}
