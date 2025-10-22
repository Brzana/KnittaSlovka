"use client";

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    return <>Blog Post Slug: {slug}</>;
}
