import React from "react";
import { ContactMessage } from "@/app/_lib/supabaseTypes";
import Link from "next/link";

interface MessageItemProps {
    message: ContactMessage;
}

export function MessageItem({ message }: MessageItemProps) {
    const isUnread = !message.read;
    const date = message.created_at
        ? new Date(message.created_at).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
          })
        : "Unknown date";

    return (
        <Link
            href={`/dashboard/messages/${message.id}`}
            className={`group hover:bg-accent2/30 relative flex cursor-pointer gap-4 p-4 transition-all ${
                isUnread ? "bg-white/80" : "bg-transparent"
            }`}
        >
            {/* Unread Indicator */}
            <div className="mt-1.5 flex h-2 w-2 flex-none items-center justify-center">
                {isUnread && (
                    <div className="bg-accent h-2 w-2 rounded-full shadow-[0_0_8px_rgba(142,95,60,0.5)]" />
                )}
            </div>

            <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-4">
                    <h3
                        className={`truncate text-sm ${
                            isUnread
                                ? "text-primary font-bold"
                                : "text-text font-medium"
                        }`}
                    >
                        {message.name}
                        <span className="text-textmuted ml-2 text-xs font-normal">
                            &lt;{message.email}&gt;
                        </span>
                    </h3>
                    <span
                        className={`flex-none text-xs ${
                            isUnread
                                ? "text-primary font-semibold"
                                : "text-textmuted"
                        }`}
                    >
                        {date}
                    </span>
                </div>

                <p
                    className={`mt-1 line-clamp-2 text-sm ${
                        isUnread ? "text-text font-semibold" : "text-textmuted"
                    }`}
                >
                    {message.message}
                </p>
            </div>
        </Link>
    );
}
