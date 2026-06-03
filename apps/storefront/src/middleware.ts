import { NextRequest, NextResponse } from "next/server"

const DEFAULT_REGION = process.env.NEXT_PUBLIC_DEFAULT_REGION || "pe"

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.includes(".")) {
    return NextResponse.next()
  }

  const firstPathSegment = request.nextUrl.pathname.split("/")[1]?.toLowerCase()

  if (firstPathSegment === DEFAULT_REGION) {
    return NextResponse.next()
  }

  const redirectPath =
    request.nextUrl.pathname === "/" ? "" : request.nextUrl.pathname

  const queryString = request.nextUrl.search || ""

  const redirectUrl = `${request.nextUrl.origin}/${DEFAULT_REGION}${redirectPath}${queryString}`

  return NextResponse.redirect(redirectUrl, 307)
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|assets|png|svg|jpg|jpeg|gif|webp).*)",
  ],
}