'use client';

import { useState } from "react";
import { login } from "@/app/lib/login";

export default function AccountPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [correctLogin, setCorrectLogin] = useState(true);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setCorrectLogin(await login(email, password));
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center dark:text-zinc-100">Login</h2>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium dark:text-zinc-100">Username</label>
                    <input
                        className="w-full p-2 border rounded dark:bg-zinc-700 dark:text-zinc-100"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-zinc-100">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded dark:bg-zinc-700 dark:text-zinc-100"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                {correctLogin ? null :
                    <div className="mb-4 text-red-500 text-sm text-center">There was an error loggin in</div>
                    }
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Login
                </button>
            </form>
        </div>
    );
}