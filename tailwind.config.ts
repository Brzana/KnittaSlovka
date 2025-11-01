import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#5c3a1a", // deep brown (logo lines)
                secondary: "#c2a384", // soft beige
                background: "#f8ecda", // paper-like background
                accent: "#8e5f3c", // warm clay for buttons/links
                accent2: "#ead8c0", // light beige for hovers/cards
                text: "#2e2218", // dark cocoa for body text
            },
            fontFamily: {
                sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
                serif: ["var(--font-playfair)", "ui-serif", "Georgia"],
            },
            boxShadow: {
                card: "0 4px 8px rgba(0,0,0,0.1)",
                "card-hover": "0 8px 16px rgba(0,0,0,0.15)",
            },
        },
    },
    plugins: [typography],
} satisfies Config;
