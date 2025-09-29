import { type NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  const isAuthed = !!token;
  const isSignInPage = req.nextUrl.pathname.startsWith("/sign-in");

  // Redirect to sign in if not authenticated and visits private page
  if (!isAuthed && !isSignInPage) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Redirect to leads if authenticated and visits sign in page
  if (isAuthed && isSignInPage) {
    return NextResponse.redirect(new URL("/leads", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in/:path*", "/leads/:path*", "/settings/:path*"],
};
