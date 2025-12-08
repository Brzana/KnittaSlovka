"use server";

import { getMessages } from "@/app/_actions/getMessages";
import React from "react";

export default async function MessagesPage() {
    const { data: messages, error } = await getMessages();
    console.log(messages);

    if (error) {
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
                Failed to load messages. Please try again later.
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-primary font-serif text-3xl font-bold">
                    Messages
                </h1>
                <p className="text-textmuted mt-1">
                    View and manage your inbox.
                </p>
            </header>

            <div className="border-secondary/30 overflow-hidden rounded-xl border bg-white/60 shadow-sm backdrop-blur-sm">
                <div className="divide-secondary/20 divide-y">
                    {messages?.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="bg-secondary/20 text-primary rounded-full p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6 5h12c2 0 4 2 4 4.5V17Z" />
                                    <path d="M2 9.4 12 15l10-5.6" />
                                </svg>
                            </div>
                            <h3 className="text-text mt-4 text-lg font-medium">
                                No messages yet
                            </h3>
                            <p className="text-textmuted mt-1 text-sm">
                                New messages from the contact form will appear
                                here.
                            </p>
                        </div>
                    ) : (
                        messages?.map((msg) => {
                            const isUnread = !msg.read;
                            const date = msg.created_at
                                ? new Date(msg.created_at).toLocaleDateString(
                                      undefined,
                                      {
                                          month: "short",
                                          day: "numeric",
                                          year: "numeric",
                                          hour: "2-digit",
                                          minute: "2-digit",
                                      },
                                  )
                                : "Unknown date";

                            return (
                                <div
                                    key={msg.id}
                                    className={`group hover:bg-accent2/30 relative flex cursor-pointer gap-4 p-4 transition-all ${
                                        isUnread
                                            ? "bg-white/80"
                                            : "bg-transparent"
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
                                                {msg.name}
                                                <span className="text-textmuted ml-2 text-xs font-normal">
                                                    &lt;{msg.email}&gt;
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
                                                isUnread
                                                    ? "text-text font-semibold"
                                                    : "text-textmuted"
                                            }`}
                                        >
                                            {msg.message}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
