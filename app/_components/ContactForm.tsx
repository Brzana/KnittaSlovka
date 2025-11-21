"use client";

import React, { useState, useTransition } from "react";

import SendButton from "./SendButton";
import { sendContactMessage } from "@/app/_actions/contactForm";

import type { ContactMessage } from "../_lib/supabaseTypes";

// TODO: sanitize inputs

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        startTransition(async () => {
            setStatus(null);
            try {
                const result = await sendContactMessage(formData);
                if ((result as any).error) {
                    setStatus((result as any).error);
                } else {
                    setStatus((result as any).success ?? "Sent");
                    // clear inputs on success
                    setName("");
                    setEmail("");
                    setMessage("");
                }
            } catch (err) {
                setStatus("Unexpected error");
            }
        });
    };

    return (
        <form
            className="w-full max-w-xl rounded-lg p-6"
            onSubmit={handleSubmit}
        >
            <h2 className="text-text mb-4 font-serif text-4xl">Contact Me</h2>
            <div className="mb-4 flex gap-4">
                <div className="flex-1">
                    <label htmlFor="name" className="sr-only">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-accent2 text-text focus:ring-accent w-full rounded border bg-[#fdf6ee] px-4 py-2 transition duration-300 focus:ring-2 focus:outline-none"
                        required
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="email" className="sr-only">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-accent2 text-text focus:ring-accent w-full rounded border bg-[#fdf6ee] px-4 py-2 transition duration-300 focus:ring-2 focus:outline-none"
                        required
                    />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="sr-only">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-accent2 text-text focus:ring-accent w-full resize-none rounded border bg-[#fdf6ee] px-4 py-2 transition duration-300 focus:ring-2 focus:outline-none"
                    required
                />
            </div>

            {status && <div className="text-text mt-3 text-sm">{status}</div>}

            <div className="mt-4 flex justify-end">
                <SendButton disabled={isPending} />
            </div>
        </form>
    );
}
