"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const LINKS = [
    { label: "Shop", href: "/dashboard/shop" },
    { label: "Messages", href: "/dashboard/messages" },
    { label: "Blog", href: "/dashboard/blog" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="bg-primary border-accent/20 flex h-full flex-col border-r p-6 shadow-xl">
            <div className="mb-10 px-4">
                <h1 className="text-secondary font-serif text-3xl font-bold tracking-wide">
                    Knitta
                    <span className="text-accent mt-1 block font-sans text-lg font-medium tracking-normal">
                        Slovka
                    </span>
                </h1>
            </div>

            <nav>
                <ul className="flex flex-col gap-3">
                    {LINKS.map((link) => {
                        const isActive = pathname.startsWith(link.href);
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={clsx(
                                        "block rounded-xl px-5 py-3 font-medium tracking-wide transition-all duration-300",
                                        isActive
                                            ? "bg-accent scale-105 transform text-white shadow-md"
                                            : "text-accent2 hover:bg-white/5 hover:pl-6 hover:text-white",
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="mt-auto border-t border-white/10 px-4 py-6">
                <p className="text-textmuted text-center text-xs font-medium opacity-60">
                    © 2025 Knitta Slovka
                </p>
            </div>
        </div>
    );
}
