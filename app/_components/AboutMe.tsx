import Image from "next/image";

import image from "../../public/Urszulka.jpg";

import { Roboto } from "next/font/google";
import IconCarousele from "./IconCarousele";
import ContactForm from "./ContactForm";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 px-4 py-8">
            <div
                className={`flex flex-row items-center justify-center gap-24 ${roboto.className}`}
            >
                <Image src={image} alt="About Me" width={400} height={400} />
                <div className="flex flex-col py-4">
                    <h1 className="text-text mb-4 text-4xl font-bold">
                        About Me
                    </h1>
                    <p className="text-text mb-4 max-w-lg">
                        Hello! My name is Urszula, and I am a passionate knitter
                        and crochet enthusiast. I have been creating beautiful
                        and cozy handmade items for my friends and family for
                        many years. My favorite materials to work with are
                        natural fibers like wool and cotton, as they provide
                        both warmth and breathability.
                    </p>
                    <IconCarousele />
                </div>
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    );
}
