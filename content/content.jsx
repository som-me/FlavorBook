// constants/recipes.js

const recipes = [
    // 🥗 VEG DISHES
    {
        id: 1,
        name: "Paneer Butter Masala",
        category: "Veg",
        time: "40 min",
        image: "/images/paneer_butter_masala.svg",
        ingredients: ["Paneer", "Butter", "Tomatoes", "Cream", "Spices"],
        steps: [
            "Blend tomatoes and cook with spices.",
            "Add butter and cream to form the gravy.",
            "Add paneer cubes and simmer for 10 minutes."
        ]
    },
    {
        id: 2,
        name: "Chole Bhature",
        category: "Veg",
        time: "60 min",
        image: "/images/chole_bhature.svg",
        ingredients: ["Chickpeas", "Onion", "Tomato", "Flour", "Spices"],
        steps: [
            "Soak and boil chickpeas, then cook with spices.",
            "Prepare dough and fry Bhature.",
            "Serve hot with onions and lemon."
        ]
    },
    {
        id: 3,
        name: "Dal Tadka",
        category: "Veg",
        time: "30 min",
        image: "/images/dal_tadka.svg",
        ingredients: ["Toor dal", "Ghee", "Garlic", "Onion", "Spices"],
        steps: [
            "Boil dal until soft.",
            "Prepare tadka with ghee, garlic, and spices.",
            "Mix the tadka into the dal and serve."
        ]
    },
    {
        id: 4,
        name: "Masala Dosa",
        category: "Veg",
        time: "45 min",
        image: "/images/masala_dosa.svg",
        ingredients: ["Rice batter", "Potatoes", "Mustard seeds", "Curry leaves"],
        steps: [
            "Prepare dosa batter and ferment overnight.",
            "Make potato filling with mustard seeds and spices.",
            "Spread dosa, add filling, and roast till crispy."
        ]
    },
    {
        id: 5,
        name: "Palak Paneer",
        category: "Veg",
        time: "35 min",
        image: "/images/palak_paneer.svg",
        ingredients: ["Spinach", "Paneer", "Garlic", "Onion", "Spices"],
        steps: [
            "Blanch spinach and make a smooth paste.",
            "Cook with garlic, onion, and spices.",
            "Add paneer cubes and serve with roti or rice."
        ]
    },
    {
        id: 6,
        name: "Aloo Gobi",
        category: "Veg",
        time: "25 min",
        image: "/images/aloo_gobi.svg",
        ingredients: ["Potatoes", "Cauliflower", "Tomatoes", "Spices"],
        steps: [
            "Sauté potatoes and cauliflower.",
            "Add tomatoes and spices, cook until tender.",
            "Garnish with coriander and serve."
        ]
    },
    {
        id: 7,
        name: "Rajma Chawal",
        category: "Veg",
        time: "50 min",
        image: "/images/rajma_chawal.svg",
        ingredients: ["Kidney beans", "Onion", "Tomato", "Rice", "Spices"],
        steps: [
            "Soak and boil rajma until soft.",
            "Cook masala with onions and tomatoes.",
            "Mix rajma and serve with rice."
        ]
    },
    {
        id: 8,
        name: "Vegetable Biryani",
        category: "Veg",
        time: "60 min",
        image: "/images/veg_biryani.svg",
        ingredients: ["Basmati rice", "Mixed vegetables", "Saffron", "Spices"],
        steps: [
            "Cook rice and sauté vegetables separately.",
            "Layer them with saffron and spices.",
            "Steam on low heat for 10 minutes."
        ]
    },
    {
        id: 9,
        name: "Malai Kofta",
        category: "Veg",
        time: "55 min",
        image: "/images/malai_kofta.svg",
        ingredients: ["Paneer", "Potatoes", "Cream", "Cashew paste", "Spices"],
        steps: [
            "Prepare kofta balls and deep fry.",
            "Make rich cashew-cream gravy.",
            "Add koftas and simmer gently before serving."
        ]
    },
    {
        id: 10,
        name: "Veg Pulao",
        category: "Veg",
        time: "30 min",
        image: "/images/veg_pulao.svg",
        ingredients: ["Rice", "Carrots", "Peas", "Beans", "Spices"],
        steps: [
            "Sauté vegetables and spices.",
            "Add soaked rice and cook with water.",
            "Serve hot with raita or pickle."
        ]
    },

    // 🍗 NON-VEG DISHES
    {
        id: 11,
        name: "Chicken Biryani",
        category: "Non-Veg",
        time: "75 min",
        image: "/images/chicken_biryani.svg",
        ingredients: ["Chicken", "Basmati rice", "Yogurt", "Spices"],
        steps: [
            "Marinate chicken in yogurt and spices.",
            "Layer chicken and rice, then steam cook.",
            "Garnish with fried onions and mint."
        ]
    },
    {
        id: 12,
        name: "Butter Chicken",
        category: "Non-Veg",
        time: "50 min",
        image: "/images/butter_chicken.svg",
        ingredients: ["Chicken", "Butter", "Tomatoes", "Cream", "Spices"],
        steps: [
            "Grill marinated chicken pieces.",
            "Prepare buttery tomato gravy.",
            "Combine and simmer with cream."
        ]
    },
    {
        id: 13,
        name: "Mutton Rogan Josh",
        category: "Non-Veg",
        time: "90 min",
        image: "/images/mutton_rogan_josh.svg",
        ingredients: ["Mutton", "Yogurt", "Kashmiri chili", "Spices"],
        steps: [
            "Marinate mutton with yogurt and spices.",
            "Cook slowly in gravy till tender.",
            "Serve hot with naan or rice."
        ]
    },
    {
        id: 14,
        name: "Chicken Tikka Masala",
        category: "Non-Veg",
        time: "55 min",
        image: "/images/chicken_tikka_masala.svg",
        ingredients: ["Chicken", "Yogurt", "Tomatoes", "Spices"],
        steps: [
            "Marinate chicken in yogurt and spices.",
            "Grill until golden.",
            "Add to masala gravy and simmer."
        ]
    },
    {
        id: 15,
        name: "Fish Curry",
        category: "Non-Veg",
        time: "40 min",
        image: "/images/fish_curry.svg",
        ingredients: ["Fish", "Coconut milk", "Tamarind", "Spices"],
        steps: [
            "Marinate fish and shallow fry.",
            "Prepare coconut-based curry.",
            "Add fish pieces and cook for 10 minutes."
        ]
    },
    {
        id: 16,
        name: "Prawn Masala",
        category: "Non-Veg",
        time: "35 min",
        image: "/images/prawn_masala.svg",
        ingredients: ["Prawns", "Onion", "Tomato", "Curry leaves", "Spices"],
        steps: [
            "Clean prawns and sauté with onion and tomato.",
            "Add curry leaves and spices.",
            "Cook till prawns turn pink."
        ]
    },
    {
        id: 17,
        name: "Egg Curry",
        category: "Non-Veg",
        time: "25 min",
        image: "/images/egg_curry.svg",
        ingredients: ["Boiled eggs", "Onion", "Tomato", "Spices"],
        steps: [
            "Fry boiled eggs lightly.",
            "Prepare onion-tomato masala.",
            "Mix and simmer for 5 minutes."
        ]
    },
    {
        id: 18,
        name: "Keema Pav",
        category: "Non-Veg",
        time: "30 min",
        image: "/images/keema_pav.svg",
        ingredients: ["Minced meat", "Onion", "Tomato", "Spices", "Pav buns"],
        steps: [
            "Cook minced meat with spices.",
            "Simmer till thick and flavorful.",
            "Serve hot with buttered pav."
        ]
    },
    {
        id: 19,
        name: "Tandoori Chicken",
        category: "Non-Veg",
        time: "50 min",
        image: "/images/tandoori_chicken.svg",
        ingredients: ["Chicken legs", "Yogurt", "Tandoori masala", "Lemon"],
        steps: [
            "Marinate chicken with yogurt and masala.",
            "Grill till cooked and slightly charred.",
            "Serve with lemon wedges and mint chutney."
        ]
    }
];

export default recipes;