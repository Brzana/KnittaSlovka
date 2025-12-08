"use server";

import { createClient } from "@/app/_utils/supabase/server";
import { ContactMessage } from "@/app/_lib/supabaseTypes";

export async function getMessages(): Promise<{
    data?: ContactMessage[];
    error?: string;
}> {
    const supabase = await createClient();
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
