"use server";

import { createClient } from "@/app/_utils/supabase/server";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const PostSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters").trim(),
    content: z
        .string()
        .min(10, "Content must be at least 10 characters")
        .trim(),
    slug: z
        .string()
        .min(2, "Slug must be at least 2 characters")
        .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            "Slug must contain only lowercase letters, numbers, and hyphens",
        )
        .trim(),
    description: z
        .string()
        .min(10, "Description must be at least 10 characters")
        .trim(),
    image_url: z.string().url("Image URL must be a valid URL").trim(),
    image_alt: z
        .string()
        .min(2, "Image alt must be at least 2 characters")
        .trim(),
});

export async function createPost(
    prevState:
        | { error: string; success?: undefined }
        | { success: string; error?: undefined }
        | null,
    formData: FormData,
) {
    const rawData = {
        title: formData.get("title"),
        content: formData.get("content"),
        slug: formData.get("slug"),
        description: formData.get("description"),
        image_url: formData.get("image_url"),
        image_alt: formData.get("image_alt"),
    };

    const result = PostSchema.safeParse(rawData);

    if (!result.success) {
        return { error: result.error.issues[0].message };
    }

    const { title, content, slug, description, image_url, image_alt } =
        result.data;

    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
        return {
            error: "Unauthorized: You must be logged in to create posts.",
        };
    }

    const { error } = await supabase.from("blog_posts").insert({
        title,
        content,
        slug,
        description,
        image_url,
        image_alt,
        published: false,
        featured: false,
    });

    if (error) {
        console.error("Supabase Error:", error);
        if (error.code === "23505") {
            // Postgres error code for unique violation
            return { error: "A post with this slug already exists." };
        }
        return { error: "Failed to create post. Please try again later." };
    }

    revalidatePath("/blog");
    revalidatePath("/dashboard/blog");

    return { success: "Post created successfully!" };
}
