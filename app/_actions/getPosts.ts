"use server";

import { createClient } from "@/app/_utils/supabase/server";
import { BlogPost } from "@/app/_lib/supabaseTypes";

type GetPostsResponse = {
    data: BlogPost[] | null;
    error: string | null;
    totalPages: number;
    totalCount: number;
};

export async function getPosts(
    query: string = "",
    page: number = 1,
    limit: number = 10,
): Promise<GetPostsResponse> {
    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
        return {
            data: null,
            error: "Unauthorized: You must be logged in to view posts.",
            totalPages: 0,
            totalCount: 0,
        };
    }

    const start = (page - 1) * limit;
    const end = start + limit - 1;

    let queryBuilder = supabase
        .from("blog_posts")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false });

    if (query) {
        queryBuilder = queryBuilder.ilike("title", `%${query}%`);
    }

    const { data, error, count } = await queryBuilder.range(start, end);

    if (error) {
        console.error("Supabase Error:", error);
        return {
            data: null,
            error: "Failed to fetch posts.",
            totalPages: 0,
            totalCount: 0,
        };
    }

    const totalCount = count || 0;
    const totalPages = Math.ceil(totalCount / limit);

    return {
        data: data as BlogPost[],
        error: null,
        totalPages,
        totalCount,
    };
}
