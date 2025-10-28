"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [favoritesCount, setFavoritesCount] = useState(0);
    const router = useRouter();

    // ✅ Load favorites count from localStorage
    useEffect(() => {
        const storedFav = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavoritesCount(storedFav.length);

        const handleStorageChange = () => {
            const updatedFav = JSON.parse(localStorage.getItem("favorites")) || [];
            setFavoritesCount(updatedFav.length);
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    // ✅ Logout handler
    const handleLogout = () => {
        const confirmLogout = confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            localStorage.removeItem("favorites");
            localStorage.removeItem("ratings");
            localStorage.removeItem("user"); // optional
            router.push("/"); // redirect to home or login page
        }
    };

    return (
        <header
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            className={`text-center text-white rounded-b-[40px] shadow-4xl relative overflow-hidden transition-all duration-500 ease-in-out
                ${isExpanded ? "py-12" : "py-4"}`}
            style={{
                background:
                    "linear-gradient(-45deg, #ff7043, #ffb347, #ff4e50, #fc913a)",
                backgroundSize: "400% 400%",
                animation: "gradientMove 10s ease infinite",
            }}
        >
            {/* Title */}
            <h1
                className={`font-bold transition-all duration-500 ${
                    isExpanded ? "text-4xl" : "text-2xl mt-4"
                }`}
            >
                🍴 FlavorBook
            </h1>

            {/* Subtitle */}
            <p
                className={`mt-2 text-lg transition-opacity duration-500 ${
                    isExpanded ? "opacity-100" : "opacity-0"
                }`}
            >
                Discover, Cook, and Enjoy Indian Dishes
            </p>

            {/* Floating Icons */}
            <div
                className={`absolute text-5xl opacity-20 top-16 left-12 transition-all duration-700 ${
                    isExpanded
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-6 opacity-0"
                } animate-bounce`}
            >
                🍛 🥘 🍲
            </div>
            <div
                className={`absolute text-5xl opacity-20 bottom-16 right-12 transition-all duration-700 ${
                    isExpanded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                } animate-pulse`}
            >
                🥗 🍤 🥟
            </div>

            {/* Top-Right Buttons */}
            <div
                className={`absolute top-6 right-6 flex gap-3 transition-all duration-500 ${
                    isExpanded ? "opacity-100" : "opacity-90"
                }`}
            >
                {/* ❤️ Favorites Button */}
                <Link href="/favorites">
                    <button className="relative bg-white text-[#ff6900] font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[#ff6900] hover:text-white transition-all">
                        ❤️ Favorites
                        {favoritesCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                                {favoritesCount}
                            </span>
                        )}
                    </button>
                </Link>

                {/* 🚪 Logout Button */}
                <button
                    onClick={handleLogout}
                    className="bg-white text-[#ff4e50] font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[#ff4e50] hover:text-white transition-all"
                >
                    🚪 Logout
                </button>
            </div>

            {/* Gradient Animation */}
            <style jsx>{`
                @keyframes gradientMove {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </header>
    );
}
