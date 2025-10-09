import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400"], // or ["400", "700"] if you want bold available
});

export default function HomePageText() {
    return (
        <p
            className={`${dancingScript.className} text-2xl text-[--color-text]`}
        >
            knitted with soul, wrapped in softness
        </p>
    );
}
