"use client";
import { useParams } from "next/navigation";

export default function WatchPage() {
    const { name } = useParams(); // ✅ must match your folder: [name]
    const searchQuery = decodeURIComponent(name || "");

    if (!searchQuery) {
        return (
            <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
                Loading recipe video...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6 text-center">
                Watch: {searchQuery} Recipe 🍳
            </h1>

            {/* ✅ Embedded YouTube Search */}
            <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
                        searchQuery + " recipe"
                    )}`}
                    title={searchQuery}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <p className="mt-6 text-gray-600 text-center max-w-2xl">
                Enjoy watching how to prepare{" "}
                <span className="font-semibold">{searchQuery}</span>! <br />
                You can explore more by searching directly on YouTube if you like.
            </p>
        </div>
    );
}
