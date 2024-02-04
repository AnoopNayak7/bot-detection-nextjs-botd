import { NextRequest, NextResponse } from 'next/server'
import { botdEdge } from './src/lib/botd'

export const config = {
  matcher: ['/', '/blocked'],
}

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/blocked') {
    req.headers.set(
      'user-agent',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/90.0.4430.93 Safari/537.36'
    )
  }

  // Ligth bot detection
  const res = await botdEdge(req, {
    useRequestId: false,
  })

  if (res && res.status !== 200) {
    // Bot, Mil gaya.
    req.nextUrl.pathname = '/bot-detected'
    const rewrite = NextResponse.rewrite(req.nextUrl)
    console.log(rewrite)
    res.headers.forEach((v, k) => rewrite.headers.set(k, v))

    return rewrite
  }
  return res
}