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
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
