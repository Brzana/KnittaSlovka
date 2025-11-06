"use client";

import BlogCard from "./PostsCard";

import { BlogPost } from "../../_lib/supabaseTypes";
import { useEffect, useState } from "react";
import fetchBlogPosts from "../../_lib/supabase";

export default function PostsList() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await fetchBlogPosts();
                setPosts(posts);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) {
        return <p>Loading posts...</p>;
    }

    if (error) {
        return <p>Failed to load posts.</p>;
    }

    return (
        <>
            {posts.map((post) => (
                <BlogCard
                    key={post.id}
                    image={post.image_url ? post.image_url : post.image_alt}
                    title={post.title}
                    description={post.description}
                    slug={post.slug}
                />
            ))}
        </>
    );
}
