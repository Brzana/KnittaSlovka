import React from "react";

export default function ContactForm() {
    return (
        <form className="w-full max-w-xl rounded-lg p-6">
            <h2 className="text-text mb-4 font-serif text-4xl">Contact Me</h2>
            <div className="mb-4 flex gap-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="border-accent2 bg-accent2 text-text focus:outline-accent flex-1 rounded border px-4 py-2"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border-accent2 bg-accent2 text-text focus:outline-accent flex-1 rounded border px-4 py-2"
                />
            </div>
            <textarea
                placeholder="Message"
                rows={4}
                className="border-accent2 bg-accent2 text-text focus:outline-accent w-full resize-none rounded border px-4 py-2"
            />
        </form>
    );
}
