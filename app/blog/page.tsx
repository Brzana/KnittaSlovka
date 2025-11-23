import PostsList from "../_components/blog/PostsList";

// TODO: make the suspension work with loader

export default function Page() {
    return (
        <div className="relative z-10 container mx-auto px-4 py-12">
            {/* Page Header */}
            <div className="mb-12 text-center">
                <h1 className="text-text dancer-font mb-4 font-serif text-4xl font-bold md:text-5xl">
                    Knitting Blog
                </h1>
                <p className="text-primary/80 dancer-font mx-auto max-w-2xl text-lg">
                    Discover patterns, techniques, and inspiration for your next
                    knitting project
                </p>
            </div>

            {/* Cards Grid */}
            <div className="dancer-font mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <PostsList />
            </div>
        </div>
    );
}
