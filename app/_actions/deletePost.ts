"use server";

import { createClient } from "@/app/_utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deletePost(slug: string) {
    const supabase = await createClient();
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
