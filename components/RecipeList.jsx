// components/RecipeList.jsx
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import recipes from "../content/content";

export default function RecipeList() {
    const [favorites, setFavorites] = useState([]);
    const [ratings, setRatings] = useState({});
    const [search, setSearch] = useState("");

    useEffect(() => {
        const storedFav = JSON.parse(localStorage.getItem("favorites")) || [];
        const storedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
        setFavorites(storedFav);
        setRatings(storedRatings);
    }, []);

    const handleToggleFavorite = (id) => {
        const updated = favorites.includes(id)
            ? favorites.filter((f) => f !== id)
            : [...favorites, id];
        setFavorites(updated);
        localStorage.setItem("favorites", JSON.stringify(updated));
    };

    const handleRate = (id, value) => {
        const updated = { ...ratings, [id]: value };
        setRatings(updated);
        localStorage.setItem("ratings", JSON.stringify(updated));
    };

    const filteredRecipes = recipes.filter((r) =>
        r.ingredients.some((ing) => ing.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <main className="px-6 py-8">
            <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
                🍛 All Recipes
            </h2>

            <section className="recipe-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                            onToggleFavorite={handleToggleFavorite}
                            onRate={handleRate}
                            rating={ratings[recipe.id] || 0}
                            isFavorite={favorites.includes(recipe.id)}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-600 col-span-full">
                        No recipes found!
                    </p>
                )}
            </section>
        </main>
    );
}
