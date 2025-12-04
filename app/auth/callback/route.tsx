// app/auth/callback/route.ts
import { createClient } from "@/app/_utils/supabase/server";
import { NextResponse } from "next/server";

//TODO: secure from open redirect attacks

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    const next = searchParams.get("next") ?? "/dashboard";

    if (code) {
        const supabase = await createClient();

        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (!error) {
            const forwardedHost = request.headers.get("x-forwarded-host"); // Dla deploymentu
            const isLocalEnv = process.env.NODE_ENV === "development";

            if (isLocalEnv) {
                return NextResponse.redirect(`${origin}${next}`);
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`);
            } else {
                return NextResponse.redirect(`${origin}${next}`);
            }
        }
    }

    return NextResponse.redirect(`${origin}/login?error=auth-code-error`);
}
