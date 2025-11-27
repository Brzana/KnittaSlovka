import { createClient } from "@/app/_utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    return (
        <main className="z-10 flex min-h-screen w-full items-start justify-center bg-transparent py-20">
            <div className="space-y-4 text-center">
                <h1 className="text-text font-serif text-5xl">Dashboard</h1>
                <p className="text-text">Welcome, {user.email}!</p>
                <p className="text-sm text-gray-600">User ID: {user.id}</p>
            </div>
        </main>
    );
}
