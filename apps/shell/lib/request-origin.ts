export function getPublicRequestOrigin(request: Request): string {
  const fallbackUrl = new URL(request.url)
  const forwardedHost = request.headers.get('x-forwarded-host')
  const forwardedProto = request.headers.get('x-forwarded-proto')
  const host = forwardedHost ?? request.headers.get('host') ?? fallbackUrl.host
  const protocol = forwardedProto ?? fallbackUrl.protocol.replace(':', '')

  return `${protocol}://${host}`
}
