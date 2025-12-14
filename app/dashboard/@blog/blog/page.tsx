import { getPosts } from "@/app/_actions/getPosts";
import BlogListTable from "./_components/BlogListTable";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function BlogPage() {
    const { data: posts, error } = await getPosts();

    return (
        <div className="h-full w-full space-y-6 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                        Blog Posts
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Manage your blog content, add new posts, or edit
                        existing ones.
                    </p>
                </div>
                <Link
                    href="/dashboard/blog/create"
                    className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    <Plus size={16} />
                    New Post
                </Link>
            </div>

            {error && (
                <div className="rounded-md border border-red-200 bg-red-50 p-4">
                    <div className="flex">
                        <div className="text-sm text-red-700">
                            <span className="font-medium">
                                Error loading posts:
                            </span>{" "}
                            {error}
                        </div>
                    </div>
                </div>
            )}

            {posts && <BlogListTable posts={posts} />}
        </div>
    );
}
