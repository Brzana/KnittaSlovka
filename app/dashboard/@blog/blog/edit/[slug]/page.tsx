import { createClient } from "@/app/_utils/supabase/server";
import { notFound } from "next/navigation";
import PostForm from "../../_components/PostForm";

interface EditPostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function EditPostPage({ params }: EditPostPageProps) {
    const { slug } = await params;
    const supabase = await createClient();

    const { data: post, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error || !post) {
        console.error("Error fetching post for edit:", error);
        notFound();
    }

    return (
        <div className="h-full overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
            <PostForm post={post} />
        </div>
    );
}
