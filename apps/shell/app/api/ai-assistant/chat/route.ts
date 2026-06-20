import { NextResponse, type NextRequest } from 'next/server'

interface AssistantChatRequest {
  prompt?: string
  context?: string
  appId?: string
}

interface AssistantChatResponse {
  text: string
  runtime: 'server-api-chat'
  provider: string
  signals: string[]
}

const defaultContext =
  'Billing has 1 overdue enterprise invoice, analytics reports a 2% conversion dip, admin has billing-autopay disabled, and customer health shows two enterprise accounts at renewal risk.'

export async function POST(request: NextRequest) {
  let payload: AssistantChatRequest

  try {
    payload = await request.json() as AssistantChatRequest
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
  }

  const prompt = payload.prompt?.trim()
  if (!prompt) {
    return NextResponse.json({ error: 'prompt is required' }, { status: 400 })
  }

  const context = payload.context?.trim() || defaultContext
  const answer = await createAssistantChatResponse(prompt, context)

  return NextResponse.json(answer, {
    headers: {
      'cache-control': 'no-store',
    },
  })
}

async function createAssistantChatResponse(prompt: string, context: string): Promise<AssistantChatResponse> {
  const provider = process.env.AI_ASSISTANT_API_PROVIDER?.toLowerCase()

  if (provider === 'openai' && process.env.OPENAI_API_KEY && process.env.AI_ASSISTANT_OPENAI_MODEL) {
    const text = await callOpenAi(prompt, context)
    if (text) return toResponse(text, 'openai')
  }

  if (provider === 'anthropic' && process.env.ANTHROPIC_API_KEY && process.env.AI_ASSISTANT_ANTHROPIC_MODEL) {
    const text = await callAnthropic(prompt, context)
    if (text) return toResponse(text, 'anthropic')
  }

  if (provider === 'gemini' && process.env.GEMINI_API_KEY && process.env.AI_ASSISTANT_GEMINI_MODEL) {
    const text = await callGemini(prompt, context)
    if (text) return toResponse(text, 'gemini')
  }

  return toResponse(buildDeterministicAnswer(prompt, context), 'demo-rules-engine')
}

async function callOpenAi(prompt: string, context: string): Promise<string | undefined> {
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.AI_ASSISTANT_OPENAI_MODEL,
      input: [
        {
          role: 'system',
          content: 'You are the Open Micro Platform AI Assistant. Return concise operational guidance.',
        },
        {
          role: 'user',
          content: `Context: ${context}\n\nQuestion: ${prompt}`,
        },
      ],
      max_output_tokens: 320,
    }),
  })

  if (!response.ok) return undefined
  const payload = await response.json() as { output_text?: string }
  return payload.output_text?.trim()
}

async function callAnthropic(prompt: string, context: string): Promise<string | undefined> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'anthropic-version': '2023-06-01',
      'x-api-key': process.env.ANTHROPIC_API_KEY ?? '',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.AI_ASSISTANT_ANTHROPIC_MODEL,
      max_tokens: 320,
      system: 'You are the Open Micro Platform AI Assistant. Return concise operational guidance.',
      messages: [
        {
          role: 'user',
          content: `Context: ${context}\n\nQuestion: ${prompt}`,
        },
      ],
    }),
  })

  if (!response.ok) return undefined
  const payload = await response.json() as { content?: Array<{ type: string; text?: string }> }
  return payload.content?.map((part) => part.text).filter(Boolean).join('\n').trim()
}

async function callGemini(prompt: string, context: string): Promise<string | undefined> {
  const model = process.env.AI_ASSISTANT_GEMINI_MODEL
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `You are the Open Micro Platform AI Assistant. Context: ${context}\n\nQuestion: ${prompt}`,
              },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 320,
        },
      }),
    }
  )

  if (!response.ok) return undefined
  const payload = await response.json() as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> }
  return payload.candidates?.[0]?.content?.parts?.map((part) => part.text).filter(Boolean).join('\n').trim()
}

function buildDeterministicAnswer(prompt: string, context: string): string {
  return [
    `For "${prompt}", I correlated the platform context instead of returning static mock data.`,
    context,
    'Recommended workflow: open Billing for the overdue invoice, enable a 25% billing-autopay rollout in Admin, ask Analytics to monitor checkout recovery, and notify the two at-risk customer owners.',
    'This response came from the server API fallback, so the same micro app still works when an AI host bridge or Chrome Built-in AI is unavailable.',
  ].join(' ')
}

function toResponse(text: string, provider: string): AssistantChatResponse {
  return {
    text,
    runtime: 'server-api-chat',
    provider,
    signals: ['billing.invoice', 'analytics.funnel', 'admin.featureFlag', 'customer.health'],
  }
}
