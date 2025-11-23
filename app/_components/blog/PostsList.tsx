import BlogCard from "./PostsCard";
import { BlogPost } from "../../_lib/supabaseTypes";
import fetchBlogPosts from "../../_lib/supabase";

export default async function PostsList() {
    // Fetch data directly on the server
    const posts = await fetchBlogPosts();

    if (!posts || posts.length === 0) {
        return <p className="text-text text-center">No posts found.</p>;
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
