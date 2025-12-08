import React from "react";

export function EmptyMessages() {
    return (
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
                New messages from the contact form will appear here.
            </p>
        </div>
    );
}
