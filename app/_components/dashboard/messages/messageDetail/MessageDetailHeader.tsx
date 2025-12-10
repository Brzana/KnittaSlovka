"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MessageDetailHeader() {
    return (
        <div className="flex items-center gap-4">
            <Link
                href="/dashboard/messages"
                className="text-textmuted hover:text-text hover:bg-accent2/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            >
                <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex-1">
                <h1 className="text-secondary text-2xl font-bold">
                    Message Details
                </h1>
            </div>
        </div>
    );
}
