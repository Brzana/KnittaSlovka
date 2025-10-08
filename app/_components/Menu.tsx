"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
    const pathname = usePathname();

    return (
        <ul className="flex gap-4">
            <li>
                <Link
                    href="/blog"
                    className={
                        pathname === "/blog"
                            ? "text-accent font-bold underline"
                            : "text-text hover:text-accent"
                    }
                >
                    Blog
                </Link>
            </li>
            <li>
                <Link
                    href="/shop"
                    className={
                        pathname === "/shop"
                            ? "text-accent font-bold underline"
                            : "text-text hover:text-accent"
                    }
                >
                    Shop
                </Link>
            </li>
            <li>
                <Link
                    href="/about"
                    className={
                        pathname === "/about"
                            ? "text-accent font-bold underline"
                            : "text-text hover:text-accent"
                    }
                >
                    About
                </Link>
            </li>
        </ul>
    );
}
