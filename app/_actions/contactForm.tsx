"use server";

import { supabase } from "@/app/_lib/supabase";

export async function sendContactMessage(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "All fields are required" };
    }

    const { error } = await supabase
        .from("contact_messages")
        .insert({ name, email, message, read: false, created_at: new Date() });

    if (error) {
        return { error: "Failed to send message" };
    }

    return { success: "Message sent successfully!" };
}
