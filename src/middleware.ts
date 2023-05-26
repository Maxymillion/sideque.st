import {NextRequest, NextResponse} from "next/server"

export const config = {
    matcher: ["/", "/index"],
}

export function middleware(req: NextRequest) {
    const username: string = process.env.DEV_USERNAME ?? "dev";
    const password: string = process.env.DEV_PASSWORD ?? "dev";

    // Enable middleware on dev or staging subdomains
    if (!req.nextUrl.hostname.startsWith("dev.") || !req.nextUrl.hostname.startsWith("staging.")) {
        return NextResponse.next();
    }

    const basicAuth = req.headers.get("authorization");
    const url = req.nextUrl;

    if (basicAuth) {
        const authValue = basicAuth.split(" ")[1];
        const [user, pwd] = atob(authValue).split(":");

        if (user === username && pwd === password) {
            return NextResponse.next();
        }
    }
    url.pathname = "/api/auth";

    return NextResponse.rewrite(url);
}
