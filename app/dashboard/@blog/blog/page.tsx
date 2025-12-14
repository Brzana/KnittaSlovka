import { getPosts } from "@/app/_actions/getPosts";
import BlogListTable from "./_components/BlogListTable";
import Pagination from "./_components/Pagination";
import Search from "./_components/Search";
import Link from "next/link";
import { Plus } from "lucide-react";

interface BlogPageProps {
    searchParams: Promise<{
        query?: string;
        page?: string;
    }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const params = await searchParams;
    const query = params?.query || "";
    const currentPage = Number(params?.page) || 1;
    const limit = 10;

    const {
        data: posts,
        error,
        totalPages,
    } = await getPosts(query, currentPage, limit);

    return (
        <div className="h-full w-full space-y-6 overflow-y-auto p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                        Blog Posts
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Manage your blog content.
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

            <div className="mt-4 flex items-center justify-between gap-2">
                <Search placeholder="Search posts..." />
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

            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}
