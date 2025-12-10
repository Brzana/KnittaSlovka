"use client";

import React, { useEffect } from "react";
import { ContactMessage } from "@/app/_lib/supabaseTypes";
import { markMessageAsRead } from "@/app/_actions/markMessageAsRead";
import Link from "next/link";
import { ArrowLeft, Mail, Calendar } from "lucide-react";

interface MessageDetailProps {
    message: ContactMessage;
}

export function MessageDetail({ message }: MessageDetailProps) {
    useEffect(() => {
        if (!message.read) {
            markMessageAsRead(message.id);
        }
    }, [message.id, message.read]);

    const date = message.created_at
        ? new Date(message.created_at).toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
          })
        : "Unknown date";

    return (
        <div className="space-y-6">
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

            <div className="border-secondary/30 overflow-hidden rounded-xl border bg-white/60 shadow-sm backdrop-blur-sm">
                <div className="border-secondary/10 border-b bg-white/40 p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
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
                        <div className="text-textmuted flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>{date}</span>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <p className="text-text leading-relaxed whitespace-pre-wrap">
                        {message.message}
                    </p>
                </div>
            </div>
        </div>
    );
}
