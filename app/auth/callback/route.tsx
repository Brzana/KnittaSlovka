// app/auth/callback/route.ts
import { createClient } from "@/app/_utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    // Pobierz parametry z URL
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    // Jeśli w parametrze 'next' jest przekazany adres, użyj go, w przeciwnym razie idź do dashboardu
    const next = searchParams.get("next") ?? "/dashboard";

    if (code) {
        const supabase = await createClient();

        // Wymień kod na sesję
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (!error) {
            // Jeśli sukces, przekieruj do dashboardu
            const forwardedHost = request.headers.get("x-forwarded-host"); // Dla deploymentu np. na Vercel
            const isLocalEnv = process.env.NODE_ENV === "development";

            if (isLocalEnv) {
                // Lokalnie używamy origin
                return NextResponse.redirect(`${origin}${next}`);
            } else if (forwardedHost) {
                // Na produkcji używamy forwarded host
                return NextResponse.redirect(`https://${forwardedHost}${next}`);
            } else {
                // Fallback
                return NextResponse.redirect(`${origin}${next}`);
            }
        }
    }

    // Jeśli coś poszło nie tak, wróć do logowania z błędem
    return NextResponse.redirect(`${origin}/login?error=auth-code-error`);
}
