import "@/app/globals.css";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
import { Playfair_Display, Inter } from "next/font/google";
import type { Metadata } from "next";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "KnittaSlovka",
        template: "%s | KnittaSlovka",
    },
    description:
        "Welcome to KnittaSlovka - a blog about knitting and handmade crafts",
    keywords: ["knitting", "handmade", "crafts", "blog"],
    authors: [{ name: "KnittaSlovka" }],
    creator: "KnittaSlovka",
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    ),
    openGraph: {
        type: "website",
        locale: "pl_PL",
        url: "/",
        siteName: "KnittaSlovka",
        title: "KnittaSlovka",
        description:
            "Welcome to KnittaSlovka - a blog about knitting and handmade crafts",
    },
    twitter: {
        card: "summary_large_image",
        title: "KnittaSlovka",
        description:
            "Welcome to KnittaSlovka - a blog about knitting and handmade crafts",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <head></head>
            <body className={`flex min-h-screen flex-col font-sans`}>
                <Navigation />
                <main className="flex w-full flex-1 flex-col">
                    {/* TODO: maybe make the background image absolute? */}
                    <div
                        className="pointer-events-none absolute inset-0 bg-[url('/icon.png')] bg-contain bg-center bg-no-repeat opacity-10"
                        aria-hidden="true"
                    ></div>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
