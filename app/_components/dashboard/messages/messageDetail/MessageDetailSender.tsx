"use client";

import React from "react";
import { ContactMessage } from "@/app/_lib/supabaseTypes";
import { Mail } from "lucide-react";

interface MessageDetailSenderProps {
    message: ContactMessage;
}

export default function MessageDetailSender({
    message,
}: MessageDetailSenderProps) {
    return (
        <div className="flex items-start gap-4">
            <div className="bg-accent/10 text-accent flex h-12 w-12 flex-none items-center justify-center rounded-full">
                <span className="text-xl font-bold">
                    {message.name.charAt(0).toUpperCase()}
                </span>
            </div>
            <div>
                <h2 className="text-lg font-bold text-gray-900">
                    {message.name}
                </h2>
                <div className="text-textmuted flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <a
                        href={`mailto:${message.email}`}
                        className="hover:text-primary transition-colors"
                    >
                        {message.email}
                    </a>
                </div>
            </div>
        </div>
    );
}
