"use client";

import { BlogPost } from "@/app/_lib/supabaseTypes";
import { deletePost } from "@/app/_actions/deletePost";
import { Trash2, Edit, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";

interface BlogListTableProps {
    posts: BlogPost[];
}

export default function BlogListTable({ posts }: BlogListTableProps) {
    const [isPending, startTransition] = useTransition();

    const handleDelete = async (slug: string) => {
        if (!confirm("Are you sure you want to delete this post?")) return;

        startTransition(async () => {
            const result = await deletePost(slug);
            if (result.error) {
                alert(result.error);
            }
        });
    };

    if (posts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 py-16 text-center">
                <p className="mb-2 text-gray-500">No posts found.</p>
                <p className="text-sm text-gray-400">
                    Create your first blog post to get started!
                </p>
            </div>
        );
    }

    return (
        //TODO: make the table be over the background image
        <div className="z-10 overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3 text-left font-medium text-gray-900">
                            Title
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-gray-900">
                            Status
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-gray-900">
                            Date
                        </th>
                        <th className="px-4 py-3 text-right font-medium text-gray-900">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {posts.map((post) => (
                        <tr
                            key={post.id}
                            className="transition-colors hover:bg-gray-50"
                        >
                            <td className="px-4 py-3 font-medium text-gray-900">
                                <span
                                    className="block max-w-[300px] truncate"
                                    title={post.title}
                                >
                                    {post.title}
                                </span>
                                <span className="block max-w-[200px] truncate text-xs font-normal text-gray-500">
                                    {post.slug}
                                </span>
                            </td>
                            <td className="px-4 py-3">
                                <span
                                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                        post.published
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-800"
                                    }`}
                                >
                                    {post.published ? "Published" : "Draft"}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-500">
                                {new Date(post.created_at).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-3 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <Link
                                        href={`/dashboard/blog/edit/${post.slug}`}
                                        className="rounded-md p-1.5 text-gray-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
                                        title="Edit"
                                        aria-label={`Edit ${post.title}`}
                                    >
                                        <Edit size={16} />
                                    </Link>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        target="_blank"
                                        className="rounded-md p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                                        title="Preview"
                                        aria-label={`Preview ${post.title}`}
                                    >
                                        <ExternalLink size={16} />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(post.slug)}
                                        disabled={isPending}
                                        className="rounded-md p-1.5 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                                        title="Delete"
                                        aria-label={`Delete ${post.title}`}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
