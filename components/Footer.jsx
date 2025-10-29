"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 text-white mt-16 rounded-t-[40px] shadow-2xl"
        >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(-45deg,#ff7043,#ffb347,#ff4e50,#fc913a)] bg-[length:400%_400%] animate-[gradientMove_10s_ease_infinite]" />

            {/* Footer Content */}
            <div className="relative z-10 container mx-auto px-6 py-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold mb-4"
                >
                    🍴 FlavorBook
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-lg mb-6 text-orange-100"
                >
                    Discover, Cook, and Relish authentic Indian dishes with ease.
                </motion.p>

                {/* Footer Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex justify-center flex-wrap gap-6 text-sm sm:text-base"
                >
                    <Link href="/" className="hover:text-yellow-200 transition-colors">
                        Home
                    </Link>
                    <Link href="/favorites" className="hover:text-yellow-200 transition-colors">
                        Favorites
                    </Link>
                    <Link href="/about" className="hover:text-yellow-200 transition-colors">
                        About
                    </Link>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-200 transition-colors"
                    >
                        GitHub
                    </a>
                </motion.div>

                {/* Divider */}
                <div className="w-24 h-[2px] bg-white/40 mx-auto my-6 rounded-full" />

                {/* Copyright */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-sm text-orange-100"
                >
                    © {new Date().getFullYear()} <span className="font-semibold">FlavorBook</span> — Built with ❤️ by Prabin
                </motion.p>
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
        </footer>
    );
}
