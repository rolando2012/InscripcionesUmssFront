import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify, errors } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('access_token')?.value

  if (pathname.startsWith('/')) {
    if (token) return NextResponse.redirect(new URL('/inscripciones', request.url))
  }

  if (pathname.startsWith('/inscripciones')) {
    if (!token) return NextResponse.redirect(new URL('/', request.url))
    try {
      const { payload } = await jwtVerify(token, secret)
      // Ensure the payload.rol matches our Role enum
      if (payload && typeof payload === 'object' && 'id' in payload) {
        return NextResponse.next()
      }
      } catch (error) {
      // 2. Captura de Errores Específicos de JWT
      
      if (error instanceof errors.JWTExpired) {
        // *** ESTO MANEJA EL ERROR "exp" claim timestamp check failed ***
        console.error('JWT ha expirado:', error.message)

        const response = NextResponse.redirect(new URL('/', request.url))
        
        const isProd = process.env.NODE_ENV === 'production'

        response.cookies.set({
          name: 'access_token',
          value: '',             // vacía
          httpOnly: true,
          secure: isProd,        // solo secure en producción
          sameSite: isProd ? 'none' : 'lax',
          maxAge: 0,             // expira inmediatamente
          path: '/',             // debe coincidir con donde la pusiste originalmente
        })
        return response 
      }
      
      // Captura otros errores de verificación (ej. firma inválida, etc.)
      console.error('Error de verificación de JWT:', error)
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
  // Public or other routes
  return NextResponse.next()
}

export const config = {
  matcher: [

  ],
};
