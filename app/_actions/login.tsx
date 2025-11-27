"use server";

import { createClient } from "../_utils/supabase/server";
import { z } from "zod";
import { headers } from "next/headers"; // Dodaj ten import

const LoginSchema = z.object({
    email: z.string().email("Please enter a valid email address").trim(),
});

type LoginState =
    | { error: string; user?: undefined }
    | { user: any; error?: undefined }
    | null;

export async function login(
    prevState: LoginState,
    formData: FormData,
): Promise<LoginState> {
    const email = formData.get("email");

    const result = LoginSchema.safeParse({ email });

    if (!result.success) {
        return { error: result.error.issues[0].message };
    }

    const supabase = await createClient();

    // Pobierz origin (np. http://localhost:3000 lub Twoja domena produkcyjna)
    const origin = (await headers()).get("origin");

    const { error } = await supabase.auth.signInWithOtp({
        email: result.data.email,
        options: {
            emailRedirectTo: `${origin}/auth/callback`,
        },
    });

    if (error) {
        return { error: error.message };
    }

    return { user: true };
}
