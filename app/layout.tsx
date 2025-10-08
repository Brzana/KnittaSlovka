import "@/app/globals.css";

import Navigation from "./_components/Navigation";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <Navigation />
                <main>{children}</main>
            </body>
        </html>
    );
}
