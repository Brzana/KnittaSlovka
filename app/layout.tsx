import "@/app/globals.css";
import Navigation from "./_components/Navigation";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head></head>
            <body>
                <Navigation />
                <main>{children}</main>
            </body>
        </html>
    );
}
