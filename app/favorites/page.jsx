"use client";
import { useState, useEffect } from "react";
import RecipeCard from "../../components/RecipeCard";
import recipes from "../../content/content";

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFav = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFav);
    }, []);

    const handleToggleFavorite = (id) => {
        const updated = favorites.includes(id)
            ? favorites.filter((f) => f !== id)
            : [...favorites, id];
        setFavorites(updated);
        localStorage.setItem("favorites", JSON.stringify(updated));
    };

    const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

    return (
        <section className="min-h-screen bg-gray-50 px-6 py-12 transition-all duration-500">
            <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
                ❤️ Your Favorite Recipes
            </h1>

            {favoriteRecipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {favoriteRecipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                            onToggleFavorite={handleToggleFavorite}
                            isFavorite={favorites.includes(recipe.id)}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center mt-20">
                    <p className="text-gray-600 text-lg mb-6">
                        You haven’t added any recipes to your favorites yet 😢
                    </p>
                    <a
                        href="/"
                        className="bg-[#ff6900] hover:bg-[#ff7f1e] text-white px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                        Browse Recipes 🍲
                    </a>
                </div>
            )}
        </section>
    );
}
