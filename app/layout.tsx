import "@/app/globals.css";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head></head>
            <body className="flex min-h-screen flex-col">
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
