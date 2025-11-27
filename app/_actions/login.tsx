"use server";

import { createClient } from "../_utils/supabase/server";
import { z } from "zod";

const LoginSchema = z.object({
    email: z.string().email("Please enter a valid email address").trim(),
});

export async function login(formData: FormData) {
    const email = formData.get("email");

    const result = LoginSchema.safeParse({ email });

    if (!result.success) {
        return { error: result.error.issues[0].message };
    }

    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithOtp({
        email: result.data.email,
    });

    if (error) {
        return { error: error.message };
    }

    return { user: data?.user ?? null };
}
