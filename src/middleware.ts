import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'


 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  if(!token) return NextResponse.redirect(new URL('/', request.url))
  let response
  if(request.nextUrl.pathname.startsWith('/superadmin')) response = await verificarAcceso('superadmin', token)
  if(request.nextUrl.pathname.startsWith('/admin')) response = await verificarAcceso('admin', token)
  if(request.nextUrl.pathname.startsWith('/quality')) response = await verificarAcceso('quality', token)
  if(response !== 200) return NextResponse.redirect(new URL('/', request.url))
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  // Matcher paths using regular expressions to match routes starting with 'superadmin', 'admin', or 'quality'
  matcher: ['/superadmin/:path*', '/admin/:path*', '/quality/:path*'],
}


const verificarAcceso = async (route: string, token: RequestCookie) => {
  try {    
    const response = await fetch(`http://localhost:3000/verify?route=${route}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token.value}`,
      },
      mode: "cors",
    });
    
    return response.status;

  } catch (error) {
    console.error(error);
  }
}