"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
    const pathname = usePathname();

    return (
        <ul className="flex gap-4 divide-x">
            <li>
                <Link
                    href="/blog"
                    className={`pr-4 transition duration-300 ${
                        pathname === "/blog"
                            ? "text-accent font-bold underline"
                            : "text-text hover:text-accent"
                    }`}
                >
                    Blog
                </Link>
            </li>
            <li>
                <Link
                    href="/shop"
                    className={`pr-4 transition duration-300 ${
                        pathname === "/shop"
                            ? "text-accent font-bold underline"
                            : "text-text hover:text-accent"
                    }`}
                >
                    Shop
                </Link>
            </li>
            <li>
                <Link
                    href="/about"
                    className={`pr-4 transition duration-300 ${
                        pathname === "/about"
                            ? "text-accent font-bold underline"
                            : "text-text hover:text-accent"
                    }`}
                >
                    About
                </Link>
            </li>
        </ul>
    );
}
