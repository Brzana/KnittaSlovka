"use client";

import React, { useEffect } from "react";
import { ContactMessage } from "@/app/_lib/supabaseTypes";
import { markMessageAsRead } from "@/app/_actions/markMessageAsRead";
import MessageDetailHeader from "./MessageDetailHeader";
import MessageDetailContent from "./MessageDetailContent";
import MessageDetailSender from "./MessageDetailSender";
import MessageDetailDate from "./MessageDetailDate";

interface MessageDetailProps {
    message: ContactMessage;
}

export function MessageDetail({ message }: MessageDetailProps) {
    useEffect(() => {
        if (!message.read) {
            markMessageAsRead(message.id);
        }
    }, [message.id, message.read]);

    return (
        <div className="space-y-6">
            <MessageDetailHeader />

            <div className="border-secondary/30 overflow-hidden rounded-xl border bg-white/60 shadow-sm backdrop-blur-sm">
                <div className="border-secondary/10 border-b bg-white/40 p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <MessageDetailSender message={message} />
                        <MessageDetailDate created_at={message.created_at} />
                    </div>
                </div>

                <MessageDetailContent message={message} />
            </div>
        </div>
    );
}
