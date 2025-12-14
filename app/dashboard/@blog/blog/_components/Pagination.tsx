"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex w-full justify-center">
            <div className="flex items-center gap-4 rounded-md border bg-white p-1 shadow-sm">
                <PaginationArrow
                    direction="left"
                    href={createPageURL(currentPage - 1)}
                    isDisabled={currentPage <= 1}
                />

                <span className="px-2 text-sm font-medium text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>

                <PaginationArrow
                    direction="right"
                    href={createPageURL(currentPage + 1)}
                    isDisabled={currentPage >= totalPages}
                />
            </div>
        </div>
    );
}

function PaginationArrow({
    href,
    direction,
    isDisabled,
}: {
    href: string;
    direction: "left" | "right";
    isDisabled?: boolean;
}) {
    const className =
        "flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 focus:outline-none transition-colors";

    const icon =
        direction === "left" ? (
            <ArrowLeft className="w-4" />
        ) : (
            <ArrowRight className="w-4" />
        );

    if (isDisabled) {
        return (
            <div
                className={`${className} pointer-events-none bg-gray-50 text-gray-300`}
            >
                {icon}
            </div>
        );
    }

    return (
        <Link className={className} href={href}>
            {icon}
        </Link>
    );
}
