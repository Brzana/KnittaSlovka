import React from "react";
import { ContactMessage } from "@/app/_lib/supabaseTypes";
import { MessageItem } from "./MessageItem";
import { EmptyMessages } from "./EmptyMessages";

interface MessageListProps {
    messages?: ContactMessage[];
}

export function MessageList({ messages }: MessageListProps) {
    if (!messages || messages.length === 0) {
        return <EmptyMessages />;
    }

    return (
        <div className="divide-secondary/20 divide-y">
            {messages.map((msg) => (
                <MessageItem key={msg.id} message={msg} />
            ))}
        </div>
    );
}
