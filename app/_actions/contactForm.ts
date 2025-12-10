"use server";

import { supabase } from "@/app/_lib/supabase";
import { z } from "zod";

const ContactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").trim(),
    email: z.string().email("Please enter a valid email address").trim(),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message cannot exceed 1000 characters")
        .trim(),
});

// Add prevState as first parameter (you can ignore it if not needed)
export async function sendContactMessage(
    prevState:
        | { error: string; success?: undefined }
        | { success: string; error?: undefined }
        | null,
    formData: FormData,
) {
    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    const result = ContactFormSchema.safeParse(rawData);

    if (!result.success) {
        return { error: result.error.issues[0].message };
    }

    const { name, email, message } = result.data;

    const { error } = await supabase.from("contact_messages").insert({
        name,
        email,
        message,
        read: false,
        created_at: new Date().toISOString(),
    });

    if (error) {
        console.error("Supabase Error:", error);
        return { error: "Failed to send message. Please try again later." };
    }

    return { success: "Message sent successfully!" };
}
