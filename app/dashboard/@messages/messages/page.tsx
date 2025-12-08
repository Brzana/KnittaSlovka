"use server";

import { getMessages } from "@/app/_actions/getMessages";
import React from "react";
import { MessagesHeader } from "@/app/_components/dashboard/messages/MessagesHeader";
import { MessageList } from "@/app/_components/dashboard/messages/MessageList";

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
            <MessagesHeader />

            <div className="border-secondary/30 overflow-hidden rounded-xl border bg-white/60 shadow-sm backdrop-blur-sm">
                <MessageList messages={messages} />
            </div>
        </div>
    );
}
