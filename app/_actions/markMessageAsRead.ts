"use server";

import { createClient } from "@/app/_utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function markMessageAsRead(id: string) {
    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
        return {
            error: "Unauthorized: You must be logged in to update posts.",
        };
    }

    const { error } = await supabase
        .from("contact_messages")
        .update({ read: true })
        .eq("id", id);

    if (error) {
        console.error("Error marking message as read:", error);
        return { error: "Failed to mark message as read" };
    }

    revalidatePath("/dashboard/messages");
    return { success: true };
}
