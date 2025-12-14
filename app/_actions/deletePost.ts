"use server";

import { createClient } from "@/app/_utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deletePost(slug: string) {
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
        .from("blog_posts")
        .delete()
        .eq("slug", slug);

    if (error) {
        console.error("Supabase Error:", error);
        return { error: "Failed to delete post. Please try again later." };
    }

    revalidatePath("/blog");
    revalidatePath("/dashboard/blog");

    return { success: "Post deleted successfully!" };
}
