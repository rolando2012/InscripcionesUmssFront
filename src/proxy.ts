import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('access_token')?.value

  if (pathname.startsWith('/inscripciones')) {
    if (!token) return NextResponse.redirect(new URL('/', request.url))
    const { payload } = await jwtVerify(token, secret)
    // Ensure the payload.rol matches our Role enum
    if (payload && typeof payload === 'object' && 'id' in payload) {
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Public or other routes
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|serviceWorker|images).*)',
    '/registro/:path*',
  
  ],
};
