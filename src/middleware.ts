import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log('url : '+request.nextUrl.pathname);
    if (request.nextUrl.pathname == '/mw')
        return NextResponse.redirect(new URL('/docs', request.url))

}