import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-4 py-16">
            <div className="container mx-auto max-w-2xl text-center">
                {/* 404 Number */}
                <h1 className="text-primary mb-4 font-serif text-8xl font-bold md:text-9xl">
                    404
                </h1>

                {/* Decorative divider */}
                <div className="bg-accent2 mx-auto mb-8 h-1 w-24"></div>

                {/* Main message */}
                <h2 className="text-text mb-4 font-serif text-3xl font-bold md:text-4xl">
                    Oops! This page got tangled up
                </h2>

                <p className="text-text/80 mb-8 text-lg md:text-xl">
                    It looks like this page has slipped off the needles.
                    Don&apos;t worry, even the best knitters drop a stitch
                    sometimes.
                </p>

                {/* Navigation links */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/"
                        className="bg-accent rounded-full px-6 py-3 text-white transition-colors hover:opacity-80"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/blog"
                        className="border-accent text-accent hover:bg-accent rounded-full border-2 px-6 py-3 transition-colors hover:text-white"
                    >
                        Visit the Blog
                    </Link>
                </div>
            </div>
        </div>
    );
}
