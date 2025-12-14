import { createClient } from "@supabase/supabase-js";
import type { BlogPost, Product, ContactMessage } from "./supabaseTypes";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function fetchBlogPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });
    if (error) {
        return [];
    }
    return data;
}

export async function getPost(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error || !data) return null;
    return data;
}
