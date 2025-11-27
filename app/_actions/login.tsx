"use server";

import { createClient } from "../_utils/supabase/server";
import { redirect } from "next/navigation";
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
            // Ważne: Przekierowanie do endpointu callback, który wymieni kod na sesję
            emailRedirectTo: `${origin}/auth/callback`,
        },
    });

    if (error) {
        return { error: error.message };
    }

    // Możesz przekierować na stronę z informacją "Sprawdź email"
    // redirect("/check-email");
    // lub zostać tu gdzie jesteś (co robi obecny kod, bo redirect("/dashboard") poniżej
    // wykona się tylko w kodzie synchronicznym, a tu czekamy na maila).
    // W Twoim obecnym kodzie redirect("/dashboard") jest mylący, bo użytkownik nie jest jeszcze zalogowany.

    // Lepiej zwrócić sukces do UI:
    return { user: true }; // Zwracamy stan sukcesu, UI może wyświetlić "Sprawdź skrzynkę"
}
