import React from "react";

export default function ContactForm() {
    return (
        <form className="w-full max-w-xl rounded-lg p-6">
            <h2 className="text-text mb-4 font-serif text-4xl">Contact Me</h2>
            <div className="mb-4 flex gap-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="border-accent2 text-text focus:ring-accent flex-1 rounded border bg-[#fdf6ee] px-4 py-2 transition duration-300 focus:ring-2 focus:outline-none"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border-accent2 text-text focus:ring-accent flex-1 rounded border bg-[#fdf6ee] px-4 py-2 transition duration-300 focus:ring-2 focus:outline-none"
                />
            </div>
            <textarea
                placeholder="Message"
                rows={4}
                className="border-accent2 text-text focus:ring-accent w-full resize-none rounded border bg-[#fdf6ee] px-4 py-2 transition duration-300 focus:ring-2 focus:outline-none"
            />
        </form>
    );
}
