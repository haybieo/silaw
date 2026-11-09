const dishes = [
    {
        id: 1,
        name: "Chicken Adobo",
        tag: "National Dish",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        description: "The quintessential Filipino comfort dish featuring tender chicken simmered in a rich blend of soy sauce, vinegar, garlic, and peppercorns.",
        baseServings: 4,
        ingredients: [
            { amount: 1, unit: "kg", name: "chicken thighs or drumsticks" },
            { amount: 0.5, unit: "cup", name: "soy sauce" },
            { amount: 0.33, unit: "cup", name: "cane vinegar" },
            { amount: 6, unit: "cloves", name: "garlic, crushed" },
            { amount: 1, unit: "tsp", name: "whole black peppercorns" },
            { amount: 3, unit: "pcs", name: "bay leaves" }
        ],
        instructions: [
            "Combine chicken, soy sauce, garlic, peppercorns, and bay leaves in a pot. Marinate for 30 minutes.",
            "Bring the mixture to a boil over medium heat, then lower heat, cover, and simmer for 20 minutes.",
            "Remove the cover, pour in the vinegar, and simmer uncovered for another 10 minutes without stirring.",
            "Optional: Pan-fry the chicken pieces separately until golden brown, then return to the sauce before serving."
        ]
    },
    {
        id: 2,
        name: "Sinigang na Baboy",
        tag: "Sour Soup",
        image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=800&q=80",
        description: "A comforting, sour tamarind-based broth loaded with pork belly, radishes, eggplant, water spinach, and green chili peppers.",
        baseServings: 4,
        ingredients: [
            { amount: 800, unit: "g", name: "pork belly, cut into cubes" },
            { amount: 1, unit: "packet", name: "sinigang mix (tamarind base)" },
            { amount: 2, unit: "pcs", name: "tomatoes, quartered" },
            { amount: 1, unit: "pc", name: "onion, chopped" },
            { amount: 1, unit: "bunch", name: "kangkong (water spinach)" },
            { amount: 1, unit: "pc", name: "radish (labanos), sliced" }
        ],
        instructions: [
            "Boil pork belly in water with onions and tomatoes for 45 minutes until tender.",
            "Stir in the sinigang mix powder until completely dissolved.",
            "Add hard vegetables like radish and okra first, cooking for 3 minutes.",
            "Add kangkong leaves and long green peppers, turn off heat, and cover for 2 minutes before serving."
        ]
    },
    {
        id: 3,
        name: "Beef Kare-Kare",
        tag: "Rich Peanut Stew",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        description: "A thick, savory peanut-sauce stew featuring tender ox-tail, beef shank, and traditional vegetables served with fermented shrimp paste (bagoong).",
        baseServings: 6,
        ingredients: [
            { amount: 1, unit: "kg", name: "beef shank or oxtail" },
            { amount: 0.75, unit: "cup", name: "peanut butter" },
            { amount: 0.25, unit: "cup", name: "ground toasted rice" },
            { amount: 4, unit: "cloves", name: "garlic, minced" },
            { amount: 1, unit: "bunch", name: "string beans, cut into lengths" },
            { amount: 1, unit: "bunch", name: "banana blossoms and eggplant" }
        ],
        instructions: [
            "Boil beef chunks in water for 1.5 hours until tender, reserving the rich meat broth.",
            "Sauté garlic and onions, add the tender beef, and pour in the reserved meat broth.",
            "Stir in peanut butter and ground toasted rice until the sauce thickens smoothly.",
            "Add vegetables, simmer until crisp-tender, and serve hot with bagoong alamang on the side."
        ]
    },
    {
        id: 4,
        name: "Pork Sisig",
        tag: "Sizzling Appetizer",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        description: "A legendary Kapampangan masterpiece made of finely chopped pork facial parts and liver, seasoned with calamansi, onions, and chili peppers.",
        baseServings: 4,
        ingredients: [
            { amount: 1, unit: "kg", name: "pork mask (ears and jowl)" },
            { amount: 200, unit: "g", name: "pork liver" },
            { amount: 2, unit: "pcs", name: "onions, finely chopped" },
            { amount: 4, unit: "pcs", name: "siling labuyo (bird's eye chili)" },
            { amount: 3, unit: "tbsp", name: "calamansi juice" },
            { amount: 2, unit: "tbsp", name: "mayonnaise" }
        ],
        instructions: [
            "Boil the pork mask and liver until tender, then grill or broil them until crispy and charred.",
            "Chop the grilled meats into fine, bite-sized pieces.",
            "Toss the chopped meat in a hot bowl or sizzling plate with chopped onions, chili, and calamansi juice.",
            "Stir in mayonnaise just before serving for a creamy finish."
        ]
    },
    {
        id: 5,
        name: "Chicken Tinola",
        tag: "Ginger Broth",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
        description: "A warming, aromatic chicken soup infused with fresh ginger, garlic, onions, green papaya chunks, and chili leaves.",
        baseServings: 4,
        ingredients: [
            { amount: 800, unit: "g", name: "chicken cut-ups" },
            { amount: 2, unit: "tbsp", name: "fresh ginger, julienned" },
            { amount: 3, unit: "cloves", name: "garlic, minced" },
            { amount: 1, unit: "pc", name: "onion, chopped" },
            { amount: 1.5, unit: "cups", name: "green papaya wedges" },
            { amount: 1, unit: "cup", name: "chili leaves or malunggay" }
        ],
        instructions: [
            "Sauté garlic, onion, and julienned ginger in a pot until fragrant and lightly browned.",
            "Add chicken pieces and fish sauce, stirring until the chicken changes color.",
            "Pour in 4 cups of water, bring to a boil, then lower heat and simmer for 20 minutes.",
            "Add green papaya chunks until tender, then drop in chili leaves right before turning off the heat."
        ]
    },
    {
        id: 6,
        name: "Crispy Pata",
        tag: "Deep-Fried Feast",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        description: "Whole pork knuckle slow-simmered with spices until tender, then deep-fried to achieve an ultra-crispy golden skin and juicy meat.",
        baseServings: 6,
        ingredients: [
            { amount: 1, unit: "pc", name: "whole pork hock/leg (pata)" },
            { amount: 4, unit: "pcs", name: "bay leaves" },
            { amount: 1, unit: "tbsp", name: "whole peppercorns" },
            { amount: 2, unit: "tbsp", name: "salt" },
            { amount: 4, unit: "cups", name: "oil for deep frying" },
            { amount: 0.5, unit: "cup", name: "soy-vinegar-garlic dipping sauce" }
        ],
        instructions: [
            "Boil the pork leg with water, salt, bay leaves, and peppercorns for 1 hour until tender.",
            "Air-dry or sun-dry the boiled leg completely in the refrigerator overnight for maximum crispiness.",
            "Deep-fry the whole leg in hot oil until the skin bubbles and turns golden brown and crunchy.",
            "Chop into pieces and serve immediately with soy-vinegar dipping sauce."
        ]
    },
    {
        id: 7,
        name: "Bicol Express",
        tag: "Spicy Coconut Pork",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
        description: "Pork cubes simmered in thick coconut milk, rich shrimp paste, and an abundance of fiery finger chilies and bird's eye chilis.",
        baseServings: 4,
        ingredients: [
            { amount: 600, unit: "g", name: "pork belly, cut into strips" },
            { amount: 2, unit: "cups", name: "thick coconut milk" },
            { amount: 3, unit: "tbsp", name: "bagoong alamang (shrimp paste)" },
            { amount: 6, unit: "pcs", name: "siling mahaba (green finger chilies), sliced" },
            { amount: 4, unit: "cloves", name: "garlic, minced" },
            { amount: 1, unit: "pc", name: "onion, chopped" }
        ],
        instructions: [
            "Sauté garlic, onions, and shrimp paste in a pan until fragrant.",
            "Add pork belly strips and cook until lightly browned.",
            "Pour in coconut milk and half of the sliced chilies. Bring to a gentle simmer.",
            "Simmer uncovered on low heat until the sauce reduces and oil separates from the coconut milk."
        ]
    },
    {
        id: 8,
        name: "Beef Caldereta",
        tag: "Tomato Beef Stew",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        description: "A rich, hearty beef stew cooked with tomato paste, liver spread, potatoes, carrots, bell peppers, and green olives.",
        baseServings: 6,
        ingredients: [
            { amount: 1, unit: "kg", name: "beef chuck, cubed" },
            { amount: 1, unit: "cup", name: "tomato sauce" },
            { amount: 0.5, unit: "cup", name: "liver spread" },
            { amount: 2, unit: "pcs", name: "potatoes and carrots, cubed" },
            { amount: 1, unit: "pc", name: "red and green bell peppers" },
            { amount: 0.5, unit: "cup", name: "green olives" }
        ],
        instructions: [
            "Sear beef cubes in a pot until browned on all sides, then remove.",
            "Sauté garlic and onions, return the beef, and pour in tomato sauce and beef broth.",
            "Simmer covered for 1.5 hours until meat becomes soft and tender.",
            "Add potatoes, carrots, liver spread, bell peppers, and olives. Cook until veggies are tender."
        ]
    },
    {
        id: 9,
        name: "Pancit Bihon",
        tag: "Celebration Noodles",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        description: "Stir-fried rice vermicelli noodles tossed with shredded chicken, pork, Chinese celery, cabbage, carrots, and soy-infused broth.",
        baseServings: 6,
        ingredients: [
            { amount: 500, unit: "g", name: "bihon noodles (rice vermicelli)" },
            { amount: 200, unit: "g", name: "shredded cooked chicken" },
            { amount: 1, unit: "cup", name: "cabbage, shredded" },
            { amount: 1, unit: "pc", name: "carrot, julienned" },
            { amount: 0.33, unit: "cup", name: "soy sauce" },
            { amount: 3, unit: "cups", name: "chicken broth" }
        ],
        instructions: [
            "Soak bihon noodles in water for 5 minutes, then drain.",
            "Sauté garlic, onions, chicken, and vegetables in a large wok until crisp-tender; remove veggies.",
            "Pour chicken broth and soy sauce into the wok and bring to a boil.",
            "Add drained bihon noodles, tossing continuously until liquid is absorbed, then fold veggies back in."
        ]
    },
    {
        id: 10,
        name: "Lumpiang Shanghai",
        tag: "Crispy Spring Rolls",
        image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
        description: "Golden-brown, crispy Filipino spring rolls filled with seasoned minced pork, minced carrots, water chestnuts, and onions.",
        baseServings: 6,
        ingredients: [
            { amount: 500, unit: "g", name: "ground pork" },
            { amount: 1, unit: "pc", name: "carrot, finely minced" },
            { amount: 1, unit: "pc", name: "onion, finely minced" },
            { amount: 1, unit: "tsp", name: "salt and pepper" },
            { amount: 1, unit: "pack", name: "lumpia wrappers (spring roll wrappers)" },
            { amount: 2, unit: "cups", name: "oil for frying" }
        ],
        instructions: [
            "Mix ground pork, minced carrots, onions, salt, and pepper thoroughly in a bowl.",
            "Place a tablespoon of filling onto a lumpia wrapper, roll tightly, and seal the edge with water.",
            "Cut the rolls diagonally into bite-sized pieces if desired.",
            "Deep fry in hot oil until golden brown and crispy, then serve with sweet chili sauce."
        ]
    }
];

let currentDish = null;

// Render recipe grid on load
document.addEventListener("DOMContentLoaded", () => {
    displayDishes(dishes);
});

function displayDishes(list) {
    const grid = document.getElementById("recipeGrid");
    grid.innerHTML = "";
    list.forEach(dish => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.onclick = () => openModal(dish);
        card.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <div class="recipe-card-content">
                <span class="tag">${dish.tag}</span>
                <h3>${dish.name}</h3>
                <p>${dish.description.substring(0, 75)}...</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterDishes() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const filtered = dishes.filter(d => d.name.toLowerCase().includes(query) || d.tag.toLowerCase().includes(query));
    displayDishes(filtered);
}

function openModal(dish) {
    currentDish = dish;
    document.getElementById("modalTitle").textContent = dish.name;
    document.getElementById("modalImg").src = dish.image;
    document.getElementById("modalDesc").textContent = dish.description;
    document.getElementById("servingInput").value = dish.baseServings;
    
    renderIngredientsAndInstructions(dish.baseServings);
    document.getElementById("recipeModal").style.display = "block";
}

function closeModal() {
    document.getElementById("recipeModal").style.display = "none";
}

function updateServings() {
    if (!currentDish) return;
    let servings = parseInt(document.getElementById("servingInput").value);
    if (isNaN(servings) || servings < 1) servings = 1;
    renderIngredientsAndInstructions(servings);
}

function renderIngredientsAndInstructions(targetServings) {
    const ratio = targetServings / currentDish.baseServings;
    
    // Ingredients
    const ingList = document.getElementById("modalIngredients");
    ingList.innerHTML = "";
    currentDish.ingredients.forEach(ing => {
        const li = document.createElement("li");
        let calculatedAmount = ing.amount * ratio;
        // Format decimals cleanly
        if (calculatedAmount % 1 !== 0) {
            calculatedAmount = calculatedAmount.toFixed(2);
        }
        li.textContent = `${calculatedAmount} ${ing.unit} - ${ing.name}`;
        ingList.appendChild(li);
    });

    // Instructions
    const insList = document.getElementById("modalInstructions");
    insList.innerHTML = "";
    currentDish.instructions.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        insList.appendChild(li);
    });
}

// Close modal when clicking outside of content
window.onclick = function(event) {
    const modal = document.getElementById("recipeModal");
    if (event.target === modal) {
        closeModal();
    }
}