import { getMessageById } from "@/app/_actions/getMessages";
import { MessageDetail } from "@/app/_components/dashboard/messages/MessageDetail";
import React from "react";

export default async function MessagePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const { data: message, error } = await getMessageById(id);

    if (error || !message) {
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
                Failed to load message. Please try again later.
            </div>
        );
    }

    return <MessageDetail message={message} />;
}
