"use client";

import { useState } from "react";

//import { login } from "../_actions/login";

export default function LoginPage() {
    const [email, setEmail] = useState("");

    return (
        <main className="z-10 flex min-h-screen w-full items-start justify-center bg-transparent py-20">
            <section className="bg-accent2/5 border-accent2 mx-auto w-[92%] rounded-md border p-10 shadow-lg md:w-[50%]">
                <div className="space-y-6">
                    <h1 className="text-text text-center font-serif text-3xl">
                        Enter Your Email
                    </h1>

                    <form className="space-y-4" method="post">
                        <div>
                            <label
                                htmlFor="email"
                                className="text-text mb-2 block font-medium"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="example@example.com"
                                className="border-accent2 text-text focus:ring-accent w-full rounded border bg-[#fdf6ee] px-4 py-2 transition duration-300 focus:ring-2 focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-accent hover:bg-accent2 w-full rounded-md py-3 font-bold text-white transition-colors"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
