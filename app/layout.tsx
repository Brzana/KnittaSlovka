import "@/app/globals.css";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
import { Playfair_Display, Inter } from "next/font/google";

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
                <main className="flex flex-1 items-center justify-center">
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
