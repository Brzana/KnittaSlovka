"use server";

import { createClient } from "@/app/_utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function togglePublish(id: string, currentStatus: boolean) {
    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
        return { error: "Unauthorized" };
    }

    const { error } = await supabase
        .from("blog_posts")
        .update({ published: !currentStatus })
        .eq("id", id);

    if (error) {
        console.error("Error toggling publish status:", error);
        return { error: "Failed to update status." };
    }

    revalidatePath("/blog");
    revalidatePath("/dashboard/blog");

    return { success: true };
}
