import BlogCard from "./PostsCard";

import { blogPosts } from "../../_data/blogPosts";

export default function PostsList() {
    return (
        <>
            {blogPosts.map((post) => (
                <BlogCard
                    key={post.id}
                    image={post.image}
                    title={post.title}
                    description={post.description}
                    slug={post.slug}
                />
            ))}
        </>
    );
}
