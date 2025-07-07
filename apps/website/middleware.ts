import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Handle service worker and Vite-related requests to avoid errors
  if (
    pathname === '/service-worker.js' ||
    pathname.startsWith('/@vite/') ||
    pathname === '/@react-refresh' ||
    pathname === '/vite.svg' ||
    pathname === '/src/index.tsx' ||
    pathname === '/runtime-config.js' ||
    pathname.includes('/src/assets/')
  ) {
    // Return a 404 with cache control headers to prevent the browser from retrying
    return new NextResponse('', { 
      status: 404, 
      statusText: 'Not Found',
      headers: {
        'Cache-Control': 'no-store, max-age=0, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  }

  // Add cache control headers to all responses
  const response = NextResponse.next();
  
  // Add cache headers to prevent caching issues
  response.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/service-worker.js',
    '/@vite/:path*',
    '/@react-refresh',
    '/vite.svg',
    '/src/:path*',
    '/runtime-config.js',
  ],
};
