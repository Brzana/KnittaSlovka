// app/blog/[slug]/page.tsx
import { supabase } from "@/app/_lib/supabase";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

import { getPost } from "@/app/_lib/supabase";

// Its there so there is no overhead generating pages at request time
export async function generateStaticParams() {
    const { data: posts } = await supabase.from("blog_posts").select("slug");
    return posts || [];
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    const metadataBase = new URL(
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    );

    return {
        title: post.title,
        description: post.description,
        keywords: ["knitting", "handmade", "crafts", "blog", post.title],
        authors: [{ name: "KnittaSlovka" }],
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            locale: "pl_PL",
            url: `/blog/${slug}`,
            siteName: "KnittaSlovka",
            publishedTime: post.published_at || post.created_at,
            modifiedTime: post.updated_at,
            images: post.image_url
                ? [
                      {
                          url: post.image_url,
                          alt: post.image_alt || post.title,
                          width: 1200,
                          height: 630,
                      },
                  ]
                : [],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: post.image_url ? [post.image_url] : [],
        },
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    // Await params in Next.js 15
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col items-center p-8">
            <h1 className="bold text-text dancer-font text-4xl">
                {post.title}
            </h1>
            {/* Add Image component here if post.image_url exists */}
            <h2 className="font-accent dancer-font text-textmuted mt-8 text-2xl">
                {post.description}
            </h2>
            {post.image_url && (
                <div className="shadow-card relative mb-10 h-64 w-full max-w-4xl overflow-hidden rounded-2xl md:h-96">
                    <Image
                        src={post.image_url}
                        alt={post.image_alt || post.title}
                        fill
                        className="object-cover"
                        priority // Loads image immediately for better LCP
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                </div>
            )}
            <article className="prose prose-lg dark:prose-invert dancer-font mt-6 w-full max-w-3xl">
                <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
            </article>
        </div>
    );
}
