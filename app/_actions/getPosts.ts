"use server";

import { createClient } from "@/app/_utils/supabase/server";
import { BlogPost } from "@/app/_lib/supabaseTypes";

export async function getPosts(): Promise<{
    data: BlogPost[] | null;
    error: string | null;
}> {
    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
        return {
            data: null,
            error: "Unauthorized: You must be logged in to view posts.",
        };
    }

    const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Supabase Error:", error);
        return { data: null, error: "Failed to fetch posts." };
    }

    return { data, error: null };
}
