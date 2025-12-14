"use client";

import { createPost } from "@/app/_actions/createPost";
import { updatePost } from "@/app/_actions/updatePost";
import { BlogPost } from "@/app/_lib/supabaseTypes";
import { useActionState, useEffect, useState } from "react";
import { Loader2, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PostFormProps {
    post?: BlogPost; // If provided, we are in Edit mode
}

const initialState = null;

export default function PostForm({ post }: PostFormProps) {
    // Determine if we are creating or updating
    const action = post ? updatePost : createPost;
    const [state, formAction, isPending] = useActionState(action, initialState);

    // Local state for slug auto-generation (only in create mode)
    const [title, setTitle] = useState(post?.title || "");
    const [slug, setSlug] = useState(post?.slug || "");
    const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);

    useEffect(() => {
        // Auto-generate slug from title if not in edit mode and slug hasn't been manually touched
        if (!post && !isSlugManuallyEdited) {
            const generatedSlug = title
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric chars with hyphens
                .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
            setSlug(generatedSlug);
        }
    }, [title, post, isSlugManuallyEdited]);

    return (
        <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link
                        href="/dashboard/blog"
                        className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                        title="Back to Blog"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {post ? "Edit Post" : "Create New Post"}
                    </h1>
                </div>
            </div>

            <form
                action={formAction}
                className="space-y-8 rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
            >
                {/* Hidden ID for Update */}
                {post && <input type="hidden" name="id" value={post.id} />}

                {/* Title & Slug */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            minLength={2}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                            placeholder="Enter post title"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="slug"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Slug
                        </label>
                        <input
                            type="text"
                            id="slug"
                            name="slug"
                            required
                            minLength={2}
                            value={slug}
                            onChange={(e) => {
                                setSlug(e.target.value);
                                setIsSlugManuallyEdited(true);
                            }}
                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-gray-600 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                            placeholder="url-friendly-slug"
                        />
                        <p className="text-xs text-gray-500">
                            Unique identifier for the post URL.
                        </p>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        minLength={10}
                        rows={3}
                        defaultValue={post?.description}
                        className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                        placeholder="Short summary for SEO cards and previews"
                    />
                </div>

                {/* Main Content */}
                <div className="space-y-2">
                    <label
                        htmlFor="content"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Content (Markdown)
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        required
                        minLength={10}
                        rows={10}
                        defaultValue={post?.content}
                        className="block w-full rounded-md border border-gray-300 p-3 font-mono shadow-sm focus:border-black focus:ring-black sm:text-sm"
                        placeholder="# Your markdown content here..."
                    />
                </div>

                {/* Image Fields */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <label
                            htmlFor="image_url"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Cover Image URL
                        </label>
                        <input
                            type="url"
                            id="image_url"
                            name="image_url"
                            required
                            defaultValue={post?.image_url}
                            className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="image_alt"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Image Alt Text
                        </label>
                        <input
                            type="text"
                            id="image_alt"
                            name="image_alt"
                            required
                            minLength={2}
                            defaultValue={post?.image_alt}
                            className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                            placeholder="Description of the image"
                        />
                    </div>
                </div>

                {/* Published Checkbox - Only show explicit option, defaults to false on create */}
                <div className="flex items-center gap-3 py-2">
                    <input
                        type="checkbox"
                        id="published"
                        name="published"
                        defaultChecked={post?.published}
                        className="h-5 w-5 rounded border-gray-300 text-black focus:ring-black"
                    />
                    <label
                        htmlFor="published"
                        className="text-sm font-medium text-gray-700"
                    >
                        Publish immediately?
                    </label>
                </div>

                {/* Status Messages */}
                {state?.error && (
                    <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                        Error: {state.error}
                    </div>
                )}
                {state?.success && (
                    <div className="rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                        {state.success}
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        disabled={isPending}
                        className="inline-flex items-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-medium text-white shadow transition-all hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {isPending && (
                            <Loader2 className="animate-spin" size={16} />
                        )}
                        {post ? "Update Post" : "Create Post"}
                    </button>
                </div>
            </form>
        </div>
    );
}
