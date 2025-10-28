"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Predefined credentials
    const validUser = "admin";
    const validPass = "1234";

    const handleLogin = (e) => {
        e.preventDefault();
        if (userID === validUser && password === validPass) {
            setError("");
            router.push("/home"); // TODO: change redirect path later
        } else {
            setError("Invalid user ID or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-classicbackground px-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Login
                </h2>

                <form onSubmit={handleLogin} className="space-y-4 text-gray-500">
                    <div>
                        <label
                            htmlFor="userID"
                            className="block text-sm font-medium text-gray-700"
                        >
                            User ID
                        </label>
                        <input
                            id="userID"
                            type="text"
                            value={userID}
                            onChange={(e) => setUserID(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your user ID"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {error && (
                        <p className="text-red-600 text-sm text-center mt-2">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
