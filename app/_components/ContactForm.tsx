"use client";

import React from "react";
import { useFormState } from "react-dom"; // or "react" in React 19+

import SendButton from "./SendButton";
import { sendContactMessage } from "../_actions/contactForm";

export default function ContactForm() {
    const [state, formAction] = useFormState(sendContactMessage, null);

    return (
        <form className="w-full max-w-xl rounded-lg p-6" action={formAction}>
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
                    className="border-accent2 text-text focus:ring-accent w-full resize-none rounded border bg-[#fdf6ee] px-4 py-2 transition duration-300 focus:ring-2 focus:outline-none"
                    required
                    minLength={10}
                    maxLength={1000}
                />
            </div>

            {state?.error && (
                <div className="mt-3 text-sm text-red-500">{state.error}</div>
            )}
            {state?.success && (
                <div className="mt-3 text-sm text-green-600">
                    {state.success}
                </div>
            )}

            <div className="mt-4 flex justify-end">
                <SendButton />
            </div>
        </form>
    );
}
