import Card from "../_components/blog/Card";

import { blogPosts } from "../_data/blogPosts";

export default function Page() {
    return (
        <div className="relative z-10 container mx-auto px-4 py-12">
            {/* Page Header */}
            <div className="mb-12 text-center">
                <h1 className="text-text mb-4 font-serif text-4xl font-bold md:text-5xl">
                    Knitting Blog
                </h1>
                <p className="text-primary/80 mx-auto max-w-2xl text-lg">
                    Discover patterns, techniques, and inspiration for your next
                    knitting project
                </p>
            </div>

            {/* Cards Grid */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <Card
                        key={post.id}
                        image={post.image}
                        title={post.title}
                        description={post.description}
                        slug={post.slug}
                    />
                ))}
            </div>
        </div>
    );
}
