import Image from "next/image";

import image from "../../public/Urszulka.jpg";
import IconCarousele from "./IconCarousele";
import ContactForm from "./ContactForm";

export default function AboutMe() {
    return (
        <div className="dancer-font flex flex-col items-center justify-center px-4 py-8">
            <div className="divide-accent2 flex w-full max-w-4xl flex-col items-center justify-center divide-y-2">
                <div className="dancer-font flex flex-row items-center justify-center gap-24 py-8">
                    <Image
                        src={image}
                        alt="About Me"
                        width={400}
                        height={400}
                    />
                    <div className="flex flex-col py-4">
                        <h1 className="text-text mb-4 text-4xl font-bold">
                            About Me
                        </h1>
                        <p className="text-text mb-4 max-w-lg">
                            Hello! My name is Urszula, and I am a passionate
                            knitter and crochet enthusiast. I have been creating
                            beautiful and cozy handmade items for my friends and
                            family for many years. My favorite materials to work
                            with are natural fibers like wool and cotton, as
                            they provide both warmth and breathability.
                        </p>
                        <IconCarousele />
                    </div>
                </div>
                <div className="py-8">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
