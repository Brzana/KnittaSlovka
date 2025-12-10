"use client";

import React from "react";
import { Calendar } from "lucide-react";

interface MessageDetailDateProps {
    created_at: string | Date | null | undefined;
}

export default function MessageDetailDate({
    created_at,
}: MessageDetailDateProps) {
    const date = created_at
        ? new Date(created_at).toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
          })
        : "Unknown date";

    return (
        <div className="text-textmuted flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
        </div>
    );
}
