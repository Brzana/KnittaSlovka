"use client";

import { Search as SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [isPending, startTransition] = useTransition();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        params.set("page", "1"); // Reset to page 1 on search

        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }

        startTransition(() => {
            replace(`${pathname}?${params.toString()}`);
        });
    }

    // Debounce wrapper
    let timeoutId: NodeJS.Timeout;
    const debouncedSearch = (term: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => handleSearch(term), 300);
    };

    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-black focus:ring-black"
                placeholder={placeholder}
                onChange={(e) => debouncedSearch(e.target.value)}
                defaultValue={searchParams.get("query")?.toString()}
            />
            <SearchIcon className="absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            {isPending && (
                <div className="absolute top-1/2 right-3 -translate-y-1/2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600"></div>
                </div>
            )}
        </div>
    );
}
