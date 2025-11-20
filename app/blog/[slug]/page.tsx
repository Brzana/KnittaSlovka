// app/blog/[slug]/page.tsx
import { supabase } from "@/app/_lib/supabase";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

import { getPost } from "@/app/_lib/supabase";

// Its there so there is no overhead generating pages at request time
export async function generateStaticParams() {
    const { data: posts } = await supabase.from("blog_posts").select("slug");
    return posts || [];
}

// 2. Fetch data for the specific page

export default async function Page({ params }: { params: { slug: string } }) {
    // Await params in Next.js 15
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col items-center p-8">
            <h1 className="bold text-text text-4xl">{post.title}</h1>
            {/* Add Image component here if post.image_url exists */}
            <h2 className="font-accent mt-8 text-2xl">{post.description}</h2>
            <article className="prose prose-lg dark:prose-invert mt-6 w-full max-w-3xl">
                <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
            </article>
        </div>
    );
}
