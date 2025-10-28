"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import recipes from "../content/content";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

export default function RecipeCarousel() {
    const scrollRef = useRef(null);
    const router = useRouter();

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    // ✅ Use `name` instead of `title`
    const handleWatch = (name) => {
        if (!name) {
            console.error("Recipe name missing!");
            return;
        }
        const encoded = encodeURIComponent(name);
        router.push(`/watch/${encoded}`);
    };

    return (
        <section className="relative w-full bg-white py-8">
            <div className="flex justify-between items-center px-6 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-orange-500 inline-block">
                    RECOMMENDED
                </h2>
                <div className="flex gap-3">
                    <button
                        onClick={() => scroll("left")}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto overflow-y-hidden gap-6 px-6 scroll-smooth no-scrollbar"
            >
                {recipes.map((recipe) => (
                    <motion.div
                        key={recipe.id}
                        className="min-w-[250px] sm:min-w-[280px] bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="relative rounded-t-xl overflow-hidden">
                            <img
                                src={recipe.image}
                                alt={recipe.name}
                                className="w-full h-48 object-cover"
                            />

                            {/* ✅ Play button navigates to /watch/[name] */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={() => handleWatch(recipe.name)}
                                    className="bg-white bg-opacity-80 p-3 rounded-full shadow-md hover:bg-orange-100 transition"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="orange"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="none"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="p-4">
                            <p className="text-orange-600 text-xs font-semibold uppercase tracking-wide mb-1">
                                {recipe.category}
                            </p>
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-3">
                                {recipe.name}
                            </h3>
                            <div className="flex items-center text-gray-500 text-xs">
                                <Clock className="w-4 h-4 mr-1" /> {recipe.time}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
