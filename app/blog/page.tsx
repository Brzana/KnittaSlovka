import Card from "../_components/blog/Card";

const blogPosts = [
    {
        id: 1,
        image: "/Blog1.jpeg", // Using existing image as placeholder
        title: "Cozy Hand-Knit Scarf",
        description:
            "Discover the warmth and comfort of creating your own hand-knit scarf.",
        slug: "cozy-hand-knit-scarf",
    },
    {
        id: 2,
        image: "/Blog2.jpeg", // Using existing image as placeholder
        title: "The Art of Cable Knitting",
        description:
            "Learn the techniques and tips for mastering beautiful cable knitting patterns.",
        slug: "art-of-cable-knitting",
    },
    {
        id: 3,
        image: "/Blog3.jpg", // Using existing image as placeholder
        title: "Chunky Knit Blanket Patterns",
        description:
            "Explore a collection of cozy chunky knit blanket patterns for your home.",
        slug: "chunky-knit-blanket-patterns",
    },
];

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
