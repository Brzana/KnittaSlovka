"use server";

import { createClient } from "../_utils/supabase/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const LoginSchema = z.object({
    email: z.string().email("Please enter a valid email address").trim(),
});

// Define a consistent state type
type LoginState =
    | { error: string; user?: undefined }
    | { user: any; error?: undefined } // or whatever your user type is
    | null;

export async function login(
    prevState: LoginState, // ← must match return type
    formData: FormData,
): Promise<LoginState> {
    // ← must match prevState type
    const email = formData.get("email");

    const result = LoginSchema.safeParse({ email });

    if (!result.success) {
        return { error: result.error.issues[0].message };
    }

    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithOtp({
        email: result.data.email,
    });

    if (error) {
        return { error: error.message };
    }

    redirect("/dashboard");
}
