(function () {
  "use strict";

  // ---------- 🌟 COMPLETE MENU DATA (114 items + image placeholders) ----------
  // Each item now has an "image" property – replace these URLs with your own.
  // Using high‑quality Unsplash food images that roughly match the category.
  const menuItems = [
    // Starters/Appetizers
    {
      id: 1,
      category: "Starters/Appetizers",
      name: "Meat Pie",
      price: 2.5,
      desc: "Each, savory beef filling",
      image: "Images/Staters/meatpie.jpg",
    },
    {
      id: 2,
      category: "Starters/Appetizers",
      name: "Samosa (Chicken/Beef)",
      price: 2.0,
      desc: "Each, served with chutney",
      image: "Images/Staters/Samosa.jpg",
    },
    {
      id: 3,
      category: "Starters/Appetizers",
      name: "Vegetable Spring Rolls",
      price: 2.0,
      desc: "Each, crispy and fresh",
      image: "Images/Staters/Vegetable_Spring_Rolls.jpg",
    },
    {
      id: 4,
      category: "Starters/Appetizers",
      name: "Puff Puff (Half pan)",
      price: 60.0,
      desc: "Half pan, serves 12-15",
      image: "Images/Staters/Puff_Puff.jpg",
    },
    {
      id: 5,
      category: "Starters/Appetizers",
      name: "Puff Puff (Large pan)",
      price: 120.0,
      desc: "Full pan, serves 25-30",
      image: "Images/Staters/Puff_Puff(Large pan).jpg",
    },
    {
      id: 6,
      category: "Starters/Appetizers",
      name: "Oreo Puff Puff (Half pan)",
      price: 75.0,
      desc: "Half pan, Oreo dough",
      image: "Images/Staters/Oreo_Puff_Puff(Half pan).jpg",
    },
    {
      id: 7,
      category: "Starters/Appetizers",
      name: "Oreo Puff Puff (Large pan)",
      price: 150.0,
      desc: "Full pan, Oreo indulgence",
      image: "Images/Staters/Oreo_Puff_Puff(Large pan).jpg",
    },
    {
      id: 8,
      category: "Starters/Appetizers",
      name: "Suya Eggrolls",
      price: 4.0,
      desc: "Each, spiced suya flavor",
      image: "Images/Staters/Suya_Eggrolls.jpg",
    },
    {
      id: 9,
      category: "Starters/Appetizers",
      name: "Cheeseburger Sliders",
      price: 3.0,
      desc: "Each, mini beef patties",
      image: "Images/Staters/Cheeseburger_Sliders.jpg",
    },
    {
      id: 10,
      category: "Starters/Appetizers",
      name: "Empanadas (Chicken/Beef/Salmon)",
      price: 3.0,
      desc: "Each, choice of protein",
      image: "Images/Staters/Empanadas.jpg",
    },
    {
      id: 11,
      category: "Starters/Appetizers",
      name: "Shredded Beef Tostones",
      price: 6.0,
      desc: "Each, crispy plantain with beef",
      image: "Images/Starters/Shredded_Beef_Tostones.jpg",
    },

    // Brunch Menu (full pan unless noted)
    {
      id: 12,
      category: "Brunch Menu",
      name: "Waffles (Plain/Blueberry/Red Velvet)",
      price: 100.0,
      desc: "Full pan, 25-30 servings",
      image: "Images/Brunch/Waffles.jpg",
    },
    {
      id: 13,
      category: "Brunch Menu",
      name: "Pancakes",
      price: 100.0,
      desc: "Full pan, fluffy stack",
      image: "Images/Brunch/Pancakes.jpg",
    },
    {
      id: 14,
      category: "Brunch Menu",
      name: "Bagel Basket",
      price: 80.0,
      desc: "Full pan, assorted bagels",
      image: "Images/Brunch/Bagel_Basket.jpg",
    },
    {
      id: 15,
      category: "Brunch Menu",
      name: "Toast",
      price: 100.0,
      desc: "Full pan, artisan bread",
      image: "Images/Brunch/Toast.jpg",
    },
    {
      id: 16,
      category: "Brunch Menu",
      name: "Avocado Toast",
      price: 125.0,
      desc: "Full pan, fresh avocado",
      image: "Images/Brunch/Avocado_Toast.jpg",
    },
    {
      id: 17,
      category: "Brunch Menu",
      name: "Biscuits",
      price: 80.0,
      desc: "Full pan, buttermilk",
      image: "Images/Brunch/Biscuits.jpg",
    },
    {
      id: 18,
      category: "Brunch Menu",
      name: "French Toast",
      price: 100.0,
      desc: "Full pan, brioche",
      image: "Images/Brunch/French_Toast.jpg",
    },
    {
      id: 19,
      category: "Brunch Menu",
      name: "Parfait Style Oatmeal",
      price: 120.0,
      desc: "Full pan, layered",
      image: "Images/Brunch/Parfait_Style_Oatmeal.jpg",
    },
    {
      id: 20,
      category: "Brunch Menu",
      name: "Yogurt Parfait",
      price: 4.0,
      desc: "Per serving, granola + berries",
      image: "Images/Brunch/Yogurt_Parfait.jpg",
    },
    {
      id: 21,
      category: "Brunch Menu",
      name: "Shrimp Grits",
      price: 140.0,
      desc: "Full pan, creamy grits + shrimp",
      image: "Images/Brunch/Shrimp_Grits.jpg",
    },
    {
      id: 22,
      category: "Brunch Menu",
      name: "Bacon (Beef/Turkey)",
      price: 175.0,
      desc: "Full pan, crispy",
      image: "Images/Brunch/Bacon_Beef_Turkey.jpg",
    },
    {
      id: 23,
      category: "Brunch Menu",
      name: "Sausage (Kielbasa/Beef/Turkey)",
      price: 175.0,
      desc: "Full pan, choice",
      image: "Images/Brunch/Sausage(Kielbasa-Beef-Turkey).jpg",
    },
    {
      id: 24,
      category: "Brunch Menu",
      name: "Grits",
      price: 80.0,
      desc: "Full pan, classic",
      image: "Images/Brunch/Grits.jpg",
    },
    {
      id: 25,
      category: "Brunch Menu",
      name: "Cheesy Grits",
      price: 100.0,
      desc: "Full pan, cheddar",
      image: "Images/Brunch/Cheesy_Grits.jpg",
    },
    {
      id: 26,
      category: "Brunch Menu",
      name: "Scrambled Eggs",
      price: 80.0,
      desc: "Full pan, fluffy",
      image: "Images/Brunch/Scrambled_Eggs.jpg",
    },
    {
      id: 27,
      category: "Brunch Menu",
      name: "One Pan Potatoes and Eggs",
      price: 120.0,
      desc: "Full pan, hearty",
      image: "Images/Brunch/One_Pan_Potatoes_and_Eggs.jpg",
    },
    {
      id: 28,
      category: "Brunch Menu",
      name: "Home Fries",
      price: 100.0,
      desc: "Full pan, seasoned",
      image: "Images/Brunch/Home_Fries.jpg",
    },
    {
      id: 29,
      category: "Brunch Menu",
      name: "Breakfast Sliders",
      price: 4.0,
      desc: "Each, egg + cheese",
      image: "Images/Brunch/Breakfast_Sliders.jpg",
    },
    {
      id: 30,
      category: "Brunch Menu",
      name: "Cinnamon Rolls",
      price: 100.0,
      desc: "Full pan, cream cheese icing",
      image: "Images/Brunch/Cinnamon_Rolls.jpg",
    },

    // Rice
    {
      id: 31,
      category: "Rice",
      name: "Yellow Rice",
      price: 100.0,
      desc: "Full pan",
      image: "Images/Rice/Yellow_Rice.jpg",
    },
    {
      id: 32,
      category: "Rice",
      name: "Nigerian Fried Rice",
      price: 120.0,
      desc: "Full pan, liver & veggies",
      image: "Images/Rice/Nigerian_Fried_Rice.jpg",
    },
    {
      id: 33,
      category: "Rice",
      name: "Chinese Fried Rice",
      price: 120.0,
      desc: "Full pan, wok style",
      image: "Images/Rice/Chinese_Fried_Rice.jpg",
    },
    {
      id: 34,
      category: "Rice",
      name: "Jollof Rice",
      price: 100.0,
      desc: "Full pan, classic",
      image: "Images/Rice/Jollof_Rice.jpg",
    },
    {
      id: 35,
      category: "Rice",
      name: "Basmati Jollof Rice",
      price: 100.0,
      desc: "Full pan, fragrant",
      image: "Images/Rice/Basmat_Jollo_Rice.jpg",
    },
    {
      id: 36,
      category: "Rice",
      name: "White Rice",
      price: 75.0,
      desc: "Full pan",
      image: "Images/Rice/White_Rice.jpg",
    },
    {
      id: 37,
      category: "Rice",
      name: "Seafood Paella",
      price: 200.0,
      desc: "Full pan, shrimp & mussels",
      image: "Images/Rice/Seafood_Paella.jpg",
    },
    {
      id: 38,
      category: "Rice",
      name: "White Rice and Honey Beans",
      price: 120.0,
      desc: "Full pan, beans mix",
      image: "Images/Rice/White_Rice_and_Honey_Beans.jpg",
    },
    {
      id: 39,
      category: "Rice",
      name: "Rice and Peas (Kidney Beans)",
      price: 120.0,
      desc: "Full pan, Caribbean style",
      image: "Images/Rice/Rice_and_Peas(Kidney Beans).jpg",
    },

    // Pasta
    {
      id: 40,
      category: "Pasta",
      name: "Lasagna (Ground Beef/Turkey/Chicken)",
      price: 160.0,
      desc: "Full pan, 25-30 servings",
      image: "Images/Pasta/Lasagna(Ground Beef_Turkey_Chicken).jpg",
    },
    {
      id: 41,
      category: "Pasta",
      name: "Baked Ziti (Ground Beef/Turkey/Chicken)",
      price: 145.0,
      desc: "Full pan",
      image: "Images/Pasta/Baked_Ziti(Ground Beef_Turkey_Chicken).jpg",
    },
    {
      id: 42,
      category: "Pasta",
      name: "Oxtail Lasagna",
      price: 300.0,
      desc: "Full pan, tender oxtail",
      image: "Images/Pasta/Oxtail_Lasagna.jpg",
    },
    {
      id: 43,
      category: "Pasta",
      name: "Alfredo (Shrimp/Chicken/Steak)",
      price: 120.0,
      desc: "Full pan, creamy",
      image: "Images/Pasta/Alfredo(Shrimp_Chicken_Steak).jpg",
    },
    {
      id: 44,
      category: "Pasta",
      name: "Rasta Pasta (Oxtail/Chicken/Steak/Shrimp)",
      price: 150.0,
      desc: "Full pan, jerk cream sauce",
      image: "Images/Pasta/Rasta_Pasta(Oxtail_Chicken_Steak_Shrimp).jpg",
    },
    {
      id: 45,
      category: "Pasta",
      name: "Jollof Spaghetti",
      price: 150.0,
      desc: "Full pan, fusion",
      image: "Images/Pasta/Jollof_Spaghetti.jpg",
    },
    {
      id: 46,
      category: "Pasta",
      name: "Seafood Scampi",
      price: 200.0,
      desc: "Full pan, garlic butter",
      image: "Images/Pasta/Seafood_Scampi.jpg",
    },
    {
      id: 47,
      category: "Pasta",
      name: "Vodka Pasta (Chicken/Steak/Salmon)",
      price: 160.0,
      desc: "Full pan, tomato cream",
      image: "Images/Pasta/Vodka_Pasta(Chicken Steak Salmon).jpg",
    },
    {
      id: 48,
      category: "Pasta",
      name: "Spaghetti and Meatballs",
      price: 125.0,
      desc: "Full pan, classic",
      image: "Images/Pasta/SpaghettiandMeatballs.jpg",
    },
    {
      id: 49,
      category: "Pasta",
      name: "Four Cheese Mac & Cheese",
      price: 160.0,
      desc: "Full pan",
      image: "Images/Pasta/Four_Cheese_Mac_&_Cheese.jpg",
    },
    {
      id: 50,
      category: "Pasta",
      name: "Lo Mein (Veg/Chicken/Shrimp/Beef)",
      price: 175.0,
      desc: "Full pan, stir fry",
      image: "Images/Pasta/Lo_Mein(Veg_Chicken_Shrimp_Beef).jpg",
    },
    {
      id: 51,
      category: "Pasta",
      name: "Lo Mein with Oxtail",
      price: 250.0,
      desc: "Full pan, rich oxtail",
      image: "Images/Pasta/Lo_Mein_with_Oxtail.jpg",
    },
    {
      id: 52,
      category: "Pasta",
      name: "Cajun Pasta",
      price: 150.0,
      desc: "Full pan, spicy",
      image: "Images/Pasta/Cajun_Pasta.jpg",
    },

    // Stew
    {
      id: 53,
      category: "Stew",
      name: "Red Stew with Live Chicken",
      price: 175.0,
      desc: "Full pan",
      image: "Images/Stew/Red_Stew_with_Live_Chicken.jpg",
    },
    {
      id: 54,
      category: "Stew",
      name: "Red Stew with Soft Chicken",
      price: 150.0,
      desc: "Full pan",
      image: "Images/Stew/Red_Stew_with_Soft_Chicken.jpg",
    },
    {
      id: 55,
      category: "Stew",
      name: "Red Stew with Fresh Fish",
      price: 175.0,
      desc: "Full pan",
      image: "Images/Stew/Red_Stew_with_Fresh_Fish.jpg",
    },
    {
      id: 56,
      category: "Stew",
      name: "Red Stew with Turkey",
      price: 175.0,
      desc: "Full pan",
      image: "Images/Stew/Red Stew with Turkey.jpg",
    },
    {
      id: 57,
      category: "Stew",
      name: "Red Stew with Smoked Turkey",
      price: 175.0,
      desc: "Full pan",
      image: "Images/Stew/Red Stew with Smoked Turkey.jpg",
    },
    {
      id: 58,
      category: "Stew",
      name: "Red Stew with Assorted Meat",
      price: 250.0,
      desc: "Shaki, cow skin, beef",
      image: "Images/Stew/Red Stew with Assorted Meat.jpg",
    },
    {
      id: 59,
      category: "Stew",
      name: "Efo Riro",
      price: 250.0,
      desc: "Full pan, spinach",
      image: "Images/Stew/Efo Riro.jpg",
    },
    {
      id: 60,
      category: "Stew",
      name: "Ofada Sauce",
      price: 250.0,
      desc: "Full pan, spicy",
      image: "Images/Stew/Ofada Sauce.jpg",
    },
    {
      id: 61,
      category: "Stew",
      name: "Ayamese Sauce",
      price: 250.0,
      desc: "Full pan, signature",
      image: "Images/Stew/Ayamese Sauce.jpg",
    },

    // Soups
    {
      id: 62,
      category: "Soups",
      name: "Ogbono",
      price: 200.0,
      desc: "Full pan, draw soup",
      image: "Images/Soups/Ogbono.jpg",
    },
    {
      id: 63,
      category: "Soups",
      name: "Okra",
      price: 200.0,
      desc: "Full pan",
      image: "Images/Soups/Okra.jpg",
    },
    {
      id: 64,
      category: "Soups",
      name: "Seafood Okra",
      price: 350.0,
      desc: "Full pan, shrimp & fish",
      image: "Images/Soups/Seafood Okra.jpg",
    },
    {
      id: 65,
      category: "Soups",
      name: "Egusi",
      price: 250.0,
      desc: "Full pan, melon seeds",
      image: "Images/Soups/Egusi.jpg",
    },
    {
      id: 66,
      category: "Soups",
      name: "Egusi with Stockfish",
      price: 275.0,
      desc: "Full pan",
      image: "Images/Soups/Egusi with Stockfish.jpg",
    },
    {
      id: 67,
      category: "Soups",
      name: "Oha",
      price: 300.0,
      desc: "Full pan, traditional",
      image: "Images/Side_Dish/Oha.jpg",
    },
    {
      id: 68,
      category: "Soups",
      name: "Afang",
      price: 350.0,
      desc: "Full pan, leafy",
      image: "Images/Soups/Afang.jpg",
    },
    {
      id: 69,
      category: "Soups",
      name: "Catfish Peppersoup",
      price: 150.0,
      desc: "Full pan",
      image: "Images/Soups/Catfish Peppersoup.jpg",
    },
    {
      id: 70,
      category: "Soups",
      name: "Tilapia Peppersoup",
      price: 130.0,
      desc: "Full pan",
      image: "Images/Soups/Tilapia Peppersoup.jpg",
    },
    {
      id: 71,
      category: "Soups",
      name: "Goat Meat Peppersoup",
      price: 200.0,
      desc: "Full pan",
      image: "Images/Soups/Goat Meat Peppersoup.jpg",
    },
    {
      id: 72,
      category: "Soups",
      name: "Assorted Meat Peppersoup",
      price: 200.0,
      desc: "Full pan",
      image: "Images/Soups/Assorted Meat Peppersoup.jpg",
    },
    {
      id: 73,
      category: "Soups",
      name: "Ukodo (Yam & Plantain)",
      price: 250.0,
      desc: "Full pan, any protein",
      image: "Images/SoupsSoups/Ukodo (Yam & Plantain).jpg",
    },

    // Proteins
    {
      id: 74,
      category: "Proteins",
      name: "Fried Chicken Wings",
      price: 175.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Fried Chicken Wings.jpg",
    },
    {
      id: 75,
      category: "Proteins",
      name: "Jerk Chicken Wings",
      price: 175.0,
      desc: "Full pan",
      image: "Images/Staters/Jerk Chicken Wings.jpg",
    },
    {
      id: 76,
      category: "Proteins",
      name: "Jerk Chicken Leg Quarters",
      price: 200.0,
      desc: "Full pan",
      image: "Images/Staters/Jerk Chicken Leg Quarters.jpg",
    },
    {
      id: 77,
      category: "Proteins",
      name: "Chicken Breast",
      price: 200.0,
      desc: "Full pan",
      image: "Images/Staters/Chicken Breast.jpg",
    },
    {
      id: 78,
      category: "Proteins",
      name: "Honey BBQ Wings",
      price: 175.0,
      desc: "Full pan",
      image: "Images/Staters/Honey BBQ Wings.jpg",
    },
    {
      id: 79,
      category: "Proteins",
      name: "Sweet Asian Chili Wings",
      price: 175.0,
      desc: "Full pan",
      image: "Images/Proteins/Sweet Asian Chili Wings.jpg",
    },
    {
      id: 80,
      category: "Proteins",
      name: "Honey Suya Wings",
      price: 175.0,
      desc: "Full pan",
      image: "Images/Proteins/Honey Suya Wings.jpg",
    },
    {
      id: 81,
      category: "Proteins",
      name: "BBQ Meatballs",
      price: 150.0,
      desc: "Full pan",
      image: "Images/Proteins/BBQ Meatballs.jpg",
    },
    {
      id: 82,
      category: "Proteins",
      name: "Grilled Shrimp",
      price: 140.0,
      desc: "Full pan",
      image: "Images/Proteins/Grilled Shrimp.jpg",
    },
    {
      id: 83,
      category: "Proteins",
      name: "Fried Shrimp",
      price: 140.0,
      desc: "Full pan",
      image: "Images/Proteins/Fried Shrimp.jpg",
    },
    {
      id: 84,
      category: "Proteins",
      name: "Pan Seared Salmon",
      price: 250.0,
      desc: "Full pan",
      image: "Images/Proteins/Pan Seared Salmon.jpg",
    },
    {
      id: 85,
      category: "Proteins",
      name: "Salmon Nuggets",
      price: 250.0,
      desc: "Great for grits",
      image: "Images/Proteins/Salmon Nuggets.jpg",
    },
    {
      id: 86,
      category: "Proteins",
      name: "Catfish Nuggets",
      price: 200.0,
      desc: "Great for grits",
      image: "Images/Proteins/Catfish Nuggets.jpg",
    },
    {
      id: 87,
      category: "Proteins",
      name: "Fried Tilapia Filet",
      price: 200.0,
      desc: "Full pan",
      image: "Images/Proteins/Fried Tilapia Filet.jpg",
    },
    {
      id: 88,
      category: "Proteins",
      name: "Fried Catfish Filet",
      price: 200.0,
      desc: "Full pan",
      image: "Images/Proteins/Fried Catfish Filet.jpg",
    },
    {
      id: 89,
      category: "Proteins",
      name: "Oxtails",
      price: 300.0,
      desc: "Full pan, tender",
      image: "Images/Proteins/Oxtails.jpg",
    },
    {
      id: 90,
      category: "Proteins",
      name: "Goat Meat (Peppered/Grilled/Fried)",
      price: 300.0,
      desc: "Full pan",
      image: "Images/Proteins/Goat Meat (Peppered/Grilled/Fried).jpg",
    },
    {
      id: 91,
      category: "Proteins",
      name: "Suya",
      price: 250.0,
      desc: "Full pan, spicy skewers",
      image: "Images/Proteins/Suya.jpg",
    },
    {
      id: 92,
      category: "Proteins",
      name: "Live Chicken",
      price: 150.0,
      desc: "Full pan",
      image: "Images/Proteins/Live Chicken.jpg",
    },
    {
      id: 93,
      category: "Proteins",
      name: "Soft Chicken",
      price: 120.0,
      desc: "Full pan",
      image: "Images/Proteins/Soft Chicken.jpg",
    },
    {
      id: 94,
      category: "Proteins",
      name: "Turkey Wings",
      price: 150.0,
      desc: "Full pan",
      image: "Images/Proteins/Turkey Wings.jpg",
    },
    {
      id: 95,
      category: "Proteins",
      name: "Lamb Chops (45 pcs)",
      price: 350.0,
      desc: "Full pan, 45 pieces",
      image: "Images/ProteinsProteins/Lamb Chops (45 pcs).jpg",
    },

    // Side Dishes
    {
      id: 96,
      category: "Side Dishes",
      name: "Fried Plantain",
      price: 80.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Fried Plantain.jpg",
    },
    {
      id: 97,
      category: "Side Dishes",
      name: "Seasoned Vegetable Medley",
      price: 80.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Seasoned Vegetable Medley.jpg",
    },
    {
      id: 98,
      category: "Side Dishes",
      name: "Buttered Corn on Cob",
      price: 80.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Buttered Corn on Cob.jpg",
    },
    {
      id: 99,
      category: "Side Dishes",
      name: "Candied Yams",
      price: 120.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Candied Yams.jpg",
    },
    {
      id: 100,
      category: "Side Dishes",
      name: "Garlic Herb Roasted Potatoes",
      price: 120.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Garlic Herb Roasted Potatoes.jpg",
    },
    {
      id: 101,
      category: "Side Dishes",
      name: "Mashed Potatoes",
      price: 100.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Mashed Potatoes.jpg",
    },
    {
      id: 102,
      category: "Side Dishes",
      name: "Asparagus",
      price: 80.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Asparagus.jpg",
    },
    {
      id: 103,
      category: "Side Dishes",
      name: "Collard Greens w/ Smoked Turkey",
      price: 140.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Collard Greens w Smoked Turkey.jpg",
    },
    {
      id: 104,
      category: "Side Dishes",
      name: "Spicy Cabbage w/ Smoked Turkey",
      price: 120.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Spicy Cabbage w Smoked Turkey.jpg",
    },
    {
      id: 105,
      category: "Side Dishes",
      name: "Sweet Potato Mash",
      price: 100.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Sweet Potato Mash.jpg",
    },
    {
      id: 106,
      category: "Side Dishes",
      name: "Honey Cornbread",
      price: 80.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Honey Cornbread.jpg",
    },
    {
      id: 107,
      category: "Side Dishes",
      name: "Meaty Baked Beans",
      price: 120.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Meaty Baked Beans.jpg",
    },
    {
      id: 108,
      category: "Side Dishes",
      name: "Classic Caesar Salad",
      price: 75.0,
      desc: "Full pan",
      image: "Images/Side_Dish/Classic Caesar Salad.jpg",
    },
    {
      id: 109,
      category: "Side Dishes",
      name: "Pounded Yam (per wrap)",
      price: 3.0,
      desc: "Each wrap",
      image: "Images/Side_Dish/Pounded Yam (per wrap).jpg",
    },
    {
      id: 110,
      category: "Side Dishes",
      name: "Plantain Flour (per wrap)",
      price: 3.0,
      desc: "Each wrap",
      image: "Images/Side_Dish/Plantain Flour (per wrap).jpg",
    },
    {
      id: 111,
      category: "Side Dishes",
      name: "Oat Flour (per wrap)",
      price: 3.0,
      desc: "Each wrap",
      image: "Images/Side_Dish/Oat Flour (per wrap).jpg",
    },

    // Cocktails/Mocktails
    {
      id: 112,
      category: "Cocktails/Mocktails",
      name: "Mimosa",
      price: 6.0,
      desc: "Per glass, brunch",
      image: "Images/Cocktails/Mimosa.jpg",
    },
    {
      id: 113,
      category: "Cocktails/Mocktails",
      name: "Bellini",
      price: 6.0,
      desc: "Per glass",
      image: "Images/Cocktails/Bellini.jpg",
    },
    {
      id: 114,
      category: "Cocktails/Mocktails",
      name: "Tequila Sunrise",
      price: 6.0,
      desc: "Per glass",
      image: "Images/Cocktails/Tequila Sunrise.jpg",
    },
  ];

  // ---------- extract unique categories ----------
  const categories = [
    "All Items",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  // ---------- global cart ----------
  let cart = [];

  // DOM elements
  const filterContainer = document.getElementById("filterContainer");
  const menuGrid = document.getElementById("menuGrid");
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  const cartTotalAmount = document.getElementById("cartTotalAmount");
  const clearCartBtn = document.getElementById("clearCartBtn");

  // render filter buttons
  function renderFilters() {
    filterContainer.innerHTML = categories
      .map(
        (cat) =>
          `<button class="filter-btn ${cat === "All Items" ? "active" : ""}" data-filter="${cat}">${cat}</button>`,
      )
      .join("");
  }

  // render menu items with image
  function renderMenu(filterCategory) {
    const filtered =
      filterCategory === "All Items"
        ? menuItems
        : menuItems.filter((item) => item.category === filterCategory);

    if (filtered.length === 0) {
      menuGrid.innerHTML =
        '<div class="no-items">✨ No items in this category yet ✨</div>';
      return;
    }

    menuGrid.innerHTML = filtered
      .map(
        (item) => `
          <div class="menu-card" data-id="${item.id}">
            <div class="menu-img">
              <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-content">
              <span class="menu-category">${item.category}</span>
              <div class="menu-name">${item.name}</div>
              <div class="menu-desc">${item.desc}</div>
              <div class="menu-price">$${item.price.toFixed(2)}</div>
              <div class="item-controls">
                <input type="number" min="1" value="1" class="qty-input" id="qty-${item.id}" step="1">
                <button class="add-btn" data-id="${item.id}">Add to cart</button>
              </div>
            </div>
          </div>
        `,
      )
      .join("");
  }

  // add to cart
  function addToCart(itemId, quantity) {
    const item = menuItems.find((i) => i.id === itemId);
    if (!item) return;
    const existing = cart.find((c) => c.id === itemId);
    if (existing) existing.quantity += quantity;
    else
      cart.push({ id: item.id, name: item.name, price: item.price, quantity });
    updateCartDisplay();
  }

  // update cart UI
  function updateCartDisplay() {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML =
        '<p style="color: #8f7a6a; padding: 0.5rem 0;">🛒 Your cart is empty.</p>';
      cartTotalAmount.textContent = "$0.00";
      return;
    }
    let html = "",
      total = 0;
    cart.forEach((item) => {
      const subtotal = item.price * item.quantity;
      total += subtotal;
      html += `
            <div class="cart-item" data-id="${item.id}">
              <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
              </div>
              <div class="cart-item-qty">
                <button class="cart-qty-btn" data-id="${item.id}" data-change="-1">−</button>
                <span style="min-width:26px; text-align:center;">${item.quantity}</span>
                <button class="cart-qty-btn" data-id="${item.id}" data-change="1">+</button>
              </div>
              <div class="cart-item-subtotal">$${subtotal.toFixed(2)}</div>
            </div>
          `;
    });
    cartItemsContainer.innerHTML = html;
    cartTotalAmount.textContent = `$${total.toFixed(2)}`;
  }

  // clear cart
  function clearCart() {
    cart = [];
    updateCartDisplay();
  }

  // filter listeners
  function attachFilterListeners() {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        document
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        renderMenu(this.dataset.filter);
      });
    });
  }

  // place order
  function placeOrder() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const instructions = document.getElementById("instructions").value.trim();
    if (!name || !email || !phone || !address) {
      alert(
        "❌ Please fill in all required fields (name, email, phone, address).",
      );
      return;
    }
    if (cart.length === 0) {
      alert("🛒 Your cart is empty. Add some delicious items!");
      return;
    }
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    let summary = `✅ ORDER PLACED (demo)\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\n`;
    if (instructions) summary += `Instructions: ${instructions}\n`;
    summary += `\n--- ORDER ---\n`;
    cart.forEach(
      (item) =>
        (summary += `${item.name} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}\n`),
    );
    summary += `\nTOTAL: $${total.toFixed(2)}\n\nThank you, KaluKooks will confirm soon!`;
    alert(summary);
  }

  // event delegation for cart +/- and add buttons
  function setupDelegation() {
    // cart +/- delegation
    cartItemsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".cart-qty-btn");
      if (!btn) return;
      const id = parseInt(btn.dataset.id);
      const change = parseInt(btn.dataset.change);
      const cartItem = cart.find((c) => c.id === id);
      if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) cart = cart.filter((c) => c.id !== id);
        updateCartDisplay();
      }
    });

    // add button delegation
    menuGrid.addEventListener("click", (e) => {
      const addBtn = e.target.closest(".add-btn");
      if (!addBtn) return;
      const id = parseInt(addBtn.dataset.id);
      const qtyInput = document.getElementById(`qty-${id}`);
      if (!qtyInput) return;
      let qty = parseInt(qtyInput.value);
      if (isNaN(qty) || qty < 1) qty = 1;
      addToCart(id, qty);
    });
  }

  // mobile menu toggle
  const mobileBtn = document.querySelector(".mobile-menu");
  const navUl = document.querySelector("nav ul");
  if (mobileBtn) {
    mobileBtn.addEventListener("click", () => navUl.classList.toggle("active"));
  }

  // smooth scroll for anchors (if any)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
        navUl?.classList.remove("active");
      }
    });
  });

  // init
  function init() {
    renderFilters();
    renderMenu("All Items");
    attachFilterListeners();
    updateCartDisplay();
    setupDelegation();
    clearCartBtn.addEventListener("click", clearCart);
    document
      .getElementById("placeOrderBtn")
      .addEventListener("click", placeOrder);
  }

  init();
})();
