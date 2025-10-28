// components/RecipeCard.jsx
import { useState } from "react";

export default function RecipeCard({
    recipe,
    onToggleFavorite,
    onRate,
    rating,
    isFavorite,
}) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`recipe-card ${flipped ? "flipped" : ""}`}
            onClick={() => setFlipped(!flipped)}
        >
            <div className="card-inner">
                {/* FRONT SIDE */}
                <div className="card-front">
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="recipe-content p-4">
                        <h3 className="text-lg font-semibold text-orange-600">
                            {recipe.name}
                        </h3>
                        <p className="text-gray-700">
                            <strong>Category:</strong> {recipe.category}
                        </p>
                        <p className="text-gray-600">
                            <strong>Ingredients:</strong>{" "}
                            {recipe.ingredients.slice(0, 4).join(", ")}...
                        </p>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div className="card-back p-4 bg-white rounded-b-xl">
                    <h3 className="text-lg font-semibold text-orange-600">
                        {recipe.name}
                    </h3>
                    <p className="mt-1 font-semibold">Ingredients:</p>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                        {recipe.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                        ))}
                    </ul>

                    <p className="mt-2 font-semibold">Steps:</p>
                    <ol className="list-decimal list-inside text-sm text-gray-700">
                        {recipe.steps.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ol>

                    {/* STAR RATING */}
                    <div className="flex items-center gap-1 mt-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <span
                                key={i}
                                className={`cursor-pointer text-xl ${rating >= i ? "text-yellow-400" : "text-gray-300"
                                    }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onRate(recipe.id, i);
                                }}
                            >
                                ★
                            </span>
                        ))}
                    </div>

                    {/* FAVORITE BUTTON */}
                    <button
                        className={`mt-3 px-3 py-1 rounded-lg text-white ${isFavorite ? "bg-red-500" : "bg-orange-500"
                            }`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(recipe.id);
                        }}
                    >
                        {isFavorite ? "★ Remove Favorite" : "☆ Add Favorite"}
                    </button>
                </div>
            </div>
        </div>
    );
}
