"use client";

import { blogPosts } from "@/app/_data/blogPosts";

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = blogPosts.find((post) => post.slug === slug);

    if (!post) {
        return <>Blog Post Not Found</>;
    }

    return (
        <div className="flex min-h-screen flex-col items-center p-8">
            <h1 className="bold text-text text-4xl">{post.title}</h1>
            <p className="font-accent mt-8">{post.description}</p>
        </div>
    );
}
