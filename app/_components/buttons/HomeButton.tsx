"use client";

import React from "react";
import { useRouter } from "next/navigation";

type ButtonProps = {
    placeholder: string;
    color?: string;
};

export default function BlogButton({
    placeholder,
    color = "bg-accent",
}: ButtonProps) {
    const router = useRouter();

    const handleOnClick = () => {
        router.push("/");
    };

    return (
        <button
            className={`rounded-full px-4 py-2 text-white ${color} dancer-font cursor-pointer transition-colors hover:opacity-80`}
            onClick={handleOnClick}
        >
            {placeholder}
        </button>
    );
}
