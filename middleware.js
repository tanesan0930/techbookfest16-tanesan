import { NextResponse } from 'next/server';

export function middleware(request) {
  return NextResponse.redirect(new URL('/tanesan', request.url));
}

export const config = {
  matcher: '/redirect-tanesan',
};
