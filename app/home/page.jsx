'use client';
import Footer from "../../components/Footer";
import HomePage from "../../components/HomePage";
import RecipeCarousel from "../../components/RecipeCarousel";
import RecipeList from "../../components/RecipeList";

export default function page() {
    return (
        <div>
            <HomePage />
            <RecipeCarousel />
            <RecipeList />
            <Footer />
        </div>
    )
}


