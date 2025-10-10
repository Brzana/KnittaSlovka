import Image from "next/image";

import image from "../../public/Urszulka.jpg";

import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function AboutMe() {
    return (
        <div
            className={`z-10 flex flex-row items-center justify-center gap-24 ${roboto.className}`}
        >
            <Image src={image} alt="About Me" width={500} height={500} />
            <div className="flex flex-col py-4">
                <h1 className="text-text mb-4 text-4xl font-bold">About Me</h1>
                <p className="text-text mb-4 max-w-lg">
                    Hello! My name is Urszula, and I am a passionate knitter and
                    crochet enthusiast. I have been creating beautiful and cozy
                    handmade items for my friends and family for many years. My
                    favorite materials to work with are natural fibers like wool
                    and cotton, as they provide both warmth and breathability.
                </p>
            </div>
        </div>
    );
}
