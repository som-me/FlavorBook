"use client";
import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import recipesData from "../content/content";
import Navbar from "./Navbar";

export default function Home() {
    const [recipes, setRecipes] = useState(recipesData);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);
    const [isSearching, setIsSearching] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [newRecipe, setNewRecipe] = useState({
        name: "",
        image: "",
        category: "",
        ingredients: "",
        instructions: "",
    });

    // Handle search
    const handleSearch = () => {
        const trimmed = searchTerm.trim().toLowerCase();
        const filtered = recipes.filter((recipe) => {
            const matchName = recipe.name.toLowerCase().includes(trimmed);
            const matchCategory = category
                ? recipe.category.toLowerCase() === category.toLowerCase()
                : true;
            return matchName && matchCategory;
        });

        setFilteredRecipes(filtered);
        setIsSearching(trimmed.length > 0 || category !== "");
    };

    // Clear search
    const handleClear = () => {
        setSearchTerm("");
        setCategory("");
        setFilteredRecipes(recipes);
        setIsSearching(false);
    };

    // Handle input for new recipe form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRecipe({ ...newRecipe, [name]: value });
    };

    // Add new recipe
    const handleAddRecipe = (e) => {
        e.preventDefault();

        if (!newRecipe.name || !newRecipe.category || !newRecipe.image) {
            alert("Please fill in at least the name, image, and category.");
            return;
        }

        const newId = recipes.length + 1;
        const updatedRecipes = [
            ...recipes,
            {
                id: newId,
                ...newRecipe,
                ingredients: newRecipe.ingredients.split(",").map((i) => i.trim()),
            },
        ];

        setRecipes(updatedRecipes);
        setFilteredRecipes(updatedRecipes);
        setShowForm(false);

        // Reset form
        setNewRecipe({
            name: "",
            image: "",
            category: "",
            ingredients: "",
            instructions: "",
        });
    };

    return (
        <section className="flex flex-col relative min-h-screen bg-gray-50 transition-all duration-500">
            <Navbar />

            {/* Background image section */}
            <div className="relative mt-12 px-2 shadow-2xl transition-all duration-500">
                <img
                    src="./homebg.svg"
                    alt="home_background"
                    className="h-[60vh] w-full object-cover rounded-lg brightness-75"
                />

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg mb-6">
                        What will you cook today?
                    </h1>

                    {/* Search bar */}
                    <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-2xl">
                        {/* Search input */}
                        <div className="flex items-center flex-1 border-b sm:border-b-0 sm:border-r border-gray-200 px-4 py-3">
                            <span className="text-[#ff6900] text-xl mr-3">🍽️</span>
                            <input
                                type="text"
                                placeholder="Search for a recipe"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full outline-none text-gray-700"
                            />
                        </div>

                        {/* Category dropdown */}
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="px-4 py-3 border-b sm:border-b-0 sm:border-r border-gray-200 outline-none text-gray-700"
                        >
                            <option value="">All Categories</option>
                            <option value="Veg">Veg</option>
                            <option value="Non-Veg">Non-Veg</option>
                            <option value="Dessert">Dessert</option>
                        </select>

                        {/* Buttons */}
                        <div className="flex">
                            <button
                                onClick={handleSearch}
                                className="bg-[#ff6900] hover:bg-[#ff7f1e] text-white font-semibold px-6 py-3 transition-all"
                            >
                                🔍
                            </button>
                            {isSearching && (
                                <button
                                    onClick={handleClear}
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-4 py-3 transition-all"
                                >
                                    ✖
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Add Recipe Button */}
                    <button
                        onClick={() => setShowForm(true)}
                        className="mt-6 bg-[#ff6900] hover:bg-[#ff7f1e] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
                    >
                        ➕ Add Recipe
                    </button>

                    <p className="text-white mt-4 text-sm opacity-90">
                        Try searching with ingredients — e.g., “paneer, tomato, butter”
                    </p>
                </div>
            </div>

            {/* Results Section */}
            <div
                className={`relative z-20 bg-gray-50 px-6 pb-12 transition-all duration-500 ${isSearching
                    ? "pt-16 min-h-[70vh] -mt-8"
                    : "pt-6 min-h-[10vh] -mt-2"
                    }`}
            >
                {isSearching ? (
                    <>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                            Search Results
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredRecipes.length > 0 ? (
                                filteredRecipes.map((recipe) => (
                                    <RecipeCard key={recipe.id} recipe={recipe} />
                                ))
                            ) : (
                                <p className="text-center text-gray-600 col-span-full">
                                    No recipes found. Try different keywords.
                                </p>
                            )}
                        </div>
                    </>
                ): <></>}
            </div>

            {/* Add Recipe Modal */}
            {showForm && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg relative">
                        <h2 className="text-2xl font-bold mb-4 text-center text-[#ff6900]">
                            Add a New Recipe
                        </h2>

                        <form onSubmit={handleAddRecipe} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Recipe Name"
                                value={newRecipe.name}
                                onChange={handleInputChange}
                                className="w-full border p-3 rounded-lg outline-none"
                            />
                            <input
                                type="text"
                                name="image"
                                placeholder="Image URL"
                                value={newRecipe.image}
                                onChange={handleInputChange}
                                className="w-full border p-3 rounded-lg outline-none"
                            />
                            <select
                                name="category"
                                value={newRecipe.category}
                                onChange={handleInputChange}
                                className="w-full border p-3 rounded-lg outline-none"
                            >
                                <option value="">Select Category</option>
                                <option value="Veg">Veg</option>
                                <option value="Non-Veg">Non-Veg</option>
                                <option value="Dessert">Dessert</option>
                            </select>
                            <textarea
                                name="ingredients"
                                placeholder="Ingredients (comma separated)"
                                value={newRecipe.ingredients}
                                onChange={handleInputChange}
                                className="w-full border p-3 rounded-lg outline-none"
                            />
                            <textarea
                                name="instructions"
                                placeholder="Instructions"
                                value={newRecipe.instructions}
                                onChange={handleInputChange}
                                className="w-full border p-3 rounded-lg outline-none"
                            />

                            <div className="flex justify-end gap-3 pt-3">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#ff6900] text-white rounded-lg hover:bg-[#ff7f1e]"
                                >
                                    Add Recipe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}
