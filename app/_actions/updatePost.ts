"use server";

//TODO: pamietaj zeby uwzglednic <input type="hidden" name="id" value={post.id} /> w formularzu updatePost

import { createClient } from "@/app/_utils/supabase/server";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const UpdatePostSchema = z.object({
    id: z.string().uuid("Invalid Post ID"),
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
            "Slug invalid: lowercase letters, numbers & hyphens only",
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
    published: z.coerce.boolean().optional(),
});

export async function updatePost(
    prevState:
        | { error: string; success?: undefined }
        | { success: string; error?: undefined }
        | null,
    formData: FormData,
) {
    const rawData = {
        id: formData.get("id"),
        title: formData.get("title"),
        content: formData.get("content"),
        slug: formData.get("slug"),
        description: formData.get("description"),
        image_url: formData.get("image_url"),
        image_alt: formData.get("image_alt"),
        // Checkbox w formularzu zwraca "on" jeśli zaznaczony, lub null. coerce.boolean to obsłuży.
        published: formData.get("published"),
    };

    const result = UpdatePostSchema.safeParse(rawData);

    if (!result.success) {
        return { error: result.error.issues[0].message };
    }

    const {
        id,
        title,
        content,
        slug,
        description,
        image_url,
        image_alt,
        published,
    } = result.data;

    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
        return {
            error: "Unauthorized: You must be logged in to update posts.",
        };
    }

    const { error } = await supabase
        .from("blog_posts")
        .update({
            title,
            content,
            slug,
            description,
            image_url,
            image_alt,
            ...(published !== undefined && { published }),
            updated_at: new Date().toISOString(),
        })
        .eq("id", id);

    if (error) {
        console.error("Supabase Error:", error);

        if (error.code === "23505") {
            return { error: "A post with this slug already exists." };
        }

        return { error: "Failed to update post. Please try again later." };
    }

    revalidatePath("/blog");
    revalidatePath("/dashboard/blog");
    revalidatePath(`/blog/${slug}`);

    return { success: "Post updated successfully!" };
}
