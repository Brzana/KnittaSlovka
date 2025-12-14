"use server";

import { createClient } from "@/app/_utils/supabase/server";
import { ContactMessage } from "@/app/_lib/supabaseTypes";

export async function getMessages(): Promise<{
    data?: ContactMessage[];
    error?: string;
}> {
    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
        return {
            error: "Unauthorized: You must be logged in to see messages.",
        };
    }

    const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Supabase Error fetching messages:", error);
        return { error: "Failed to fetch messages" };
    }

    return { data: data as ContactMessage[] };
}

export async function getMessageById(id: string): Promise<{
    data?: ContactMessage;
    error?: string;
}> {
    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
        return {
            error: "Unauthorized: You must be logged in to see this message.",
        };
    }

    const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error("Supabase Error fetching message:", error);
        return { error: "Failed to fetch message" };
    }

    return { data: data as ContactMessage };
}
