import React from "react";
import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({
    children,
    blog,
    shop,
    messages,
}: {
    children: React.ReactNode;
    blog: React.ReactNode;
    shop: React.ReactNode;
    messages: React.ReactNode;
}) {
    return (
        <div className="bg-primary-background flex min-h-screen">
            <aside className="w-64 flex-shrink-0">
                <Sidebar />
            </aside>

            <main className="flex-1 overflow-y-auto p-8">
                {children}
                {blog}
                {shop}
                {messages}
            </main>
        </div>
    );
}
