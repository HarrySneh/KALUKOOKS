(function() {
      "use strict";

      // ---------- 🌟 COMPLETE MENU DATA (exactly from original, 114 items) ----------
      const menuItems = [
        { id: 1, category: "Starters/Appetizers", name: "Meat Pie", price: 2.50, desc: "Each, savory beef filling" },
        { id: 2, category: "Starters/Appetizers", name: "Samosa (Chicken/Beef)", price: 2.00, desc: "Each, served with chutney" },
        { id: 3, category: "Starters/Appetizers", name: "Vegetable Spring Rolls", price: 2.00, desc: "Each, crispy and fresh" },
        { id: 4, category: "Starters/Appetizers", name: "Puff Puff (Half pan)", price: 60.00, desc: "Half pan, serves 12-15" },
        { id: 5, category: "Starters/Appetizers", name: "Puff Puff (Large pan)", price: 120.00, desc: "Full pan, serves 25-30" },
        { id: 6, category: "Starters/Appetizers", name: "Oreo Puff Puff (Half pan)", price: 75.00, desc: "Half pan, Oreo dough" },
        { id: 7, category: "Starters/Appetizers", name: "Oreo Puff Puff (Large pan)", price: 150.00, desc: "Full pan, Oreo indulgence" },
        { id: 8, category: "Starters/Appetizers", name: "Suya Eggrolls", price: 4.00, desc: "Each, spiced suya flavor" },
        { id: 9, category: "Starters/Appetizers", name: "Cheeseburger Sliders", price: 3.00, desc: "Each, mini beef patties" },
        { id: 10, category: "Starters/Appetizers", name: "Empanadas (Chicken/Beef/Salmon)", price: 3.00, desc: "Each, choice of protein" },
        { id: 11, category: "Starters/Appetizers", name: "Shredded Beef Tostones", price: 6.00, desc: "Each, crispy plantain with beef" },
        { id: 12, category: "Brunch Menu", name: "Waffles (Plain/Blueberry/Red Velvet)", price: 100.00, desc: "Full pan, 25-30 servings" },
        { id: 13, category: "Brunch Menu", name: "Pancakes", price: 100.00, desc: "Full pan, fluffy stack" },
        { id: 14, category: "Brunch Menu", name: "Bagel Basket", price: 80.00, desc: "Full pan, assorted bagels" },
        { id: 15, category: "Brunch Menu", name: "Toast", price: 100.00, desc: "Full pan, artisan bread" },
        { id: 16, category: "Brunch Menu", name: "Avocado Toast", price: 125.00, desc: "Full pan, fresh avocado" },
        { id: 17, category: "Brunch Menu", name: "Biscuits", price: 80.00, desc: "Full pan, buttermilk" },
        { id: 18, category: "Brunch Menu", name: "French Toast", price: 100.00, desc: "Full pan, brioche" },
        { id: 19, category: "Brunch Menu", name: "Parfait Style Oatmeal", price: 120.00, desc: "Full pan, layered" },
        { id: 20, category: "Brunch Menu", name: "Yogurt Parfait", price: 4.00, desc: "Per serving, granola + berries" },
        { id: 21, category: "Brunch Menu", name: "Shrimp Grits", price: 140.00, desc: "Full pan, creamy grits + shrimp" },
        { id: 22, category: "Brunch Menu", name: "Bacon (Beef/Turkey)", price: 175.00, desc: "Full pan, crispy" },
        { id: 23, category: "Brunch Menu", name: "Sausage (Kielbasa/Beef/Turkey)", price: 175.00, desc: "Full pan, choice" },
        { id: 24, category: "Brunch Menu", name: "Grits", price: 80.00, desc: "Full pan, classic" },
        { id: 25, category: "Brunch Menu", name: "Cheesy Grits", price: 100.00, desc: "Full pan, cheddar" },
        { id: 26, category: "Brunch Menu", name: "Scrambled Eggs", price: 80.00, desc: "Full pan, fluffy" },
        { id: 27, category: "Brunch Menu", name: "One Pan Potatoes and Eggs", price: 120.00, desc: "Full pan, hearty" },
        { id: 28, category: "Brunch Menu", name: "Home Fries", price: 100.00, desc: "Full pan, seasoned" },
        { id: 29, category: "Brunch Menu", name: "Breakfast Sliders", price: 4.00, desc: "Each, egg + cheese" },
        { id: 30, category: "Brunch Menu", name: "Cinnamon Rolls", price: 100.00, desc: "Full pan, cream cheese icing" },
        { id: 31, category: "Rice", name: "Yellow Rice", price: 100.00, desc: "Full pan" },
        { id: 32, category: "Rice", name: "Nigerian Fried Rice", price: 120.00, desc: "Full pan, liver & veggies" },
        { id: 33, category: "Rice", name: "Chinese Fried Rice", price: 120.00, desc: "Full pan, wok style" },
        { id: 34, category: "Rice", name: "Jollof Rice", price: 100.00, desc: "Full pan, classic" },
        { id: 35, category: "Rice", name: "Basmati Jollof Rice", price: 100.00, desc: "Full pan, fragrant" },
        { id: 36, category: "Rice", name: "White Rice", price: 75.00, desc: "Full pan" },
        { id: 37, category: "Rice", name: "Seafood Paella", price: 200.00, desc: "Full pan, shrimp & mussels" },
        { id: 38, category: "Rice", name: "White Rice and Honey Beans", price: 120.00, desc: "Full pan, beans mix" },
        { id: 39, category: "Rice", name: "Rice and Peas (Kidney Beans)", price: 120.00, desc: "Full pan, Caribbean style" },
        { id: 40, category: "Pasta", name: "Lasagna (Ground Beef/Turkey/Chicken)", price: 160.00, desc: "Full pan, 25-30 servings" },
        { id: 41, category: "Pasta", name: "Baked Ziti (Ground Beef/Turkey/Chicken)", price: 145.00, desc: "Full pan" },
        { id: 42, category: "Pasta", name: "Oxtail Lasagna", price: 300.00, desc: "Full pan, tender oxtail" },
        { id: 43, category: "Pasta", name: "Alfredo (Shrimp/Chicken/Steak)", price: 120.00, desc: "Full pan, creamy" },
        { id: 44, category: "Pasta", name: "Rasta Pasta (Oxtail/Chicken/Steak/Shrimp)", price: 150.00, desc: "Full pan, jerk cream sauce" },
        { id: 45, category: "Pasta", name: "Jollof Spaghetti", price: 150.00, desc: "Full pan, fusion" },
        { id: 46, category: "Pasta", name: "Seafood Scampi", price: 200.00, desc: "Full pan, garlic butter" },
        { id: 47, category: "Pasta", name: "Vodka Pasta (Chicken/Steak/Salmon)", price: 160.00, desc: "Full pan, tomato cream" },
        { id: 48, category: "Pasta", name: "Spaghetti and Meatballs", price: 125.00, desc: "Full pan, classic" },
        { id: 49, category: "Pasta", name: "Four Cheese Mac & Cheese", price: 160.00, desc: "Full pan" },
        { id: 50, category: "Pasta", name: "Lo Mein (Veg/Chicken/Shrimp/Beef)", price: 175.00, desc: "Full pan, stir fry" },
        { id: 51, category: "Pasta", name: "Lo Mein with Oxtail", price: 250.00, desc: "Full pan, rich oxtail" },
        { id: 52, category: "Pasta", name: "Cajun Pasta", price: 150.00, desc: "Full pan, spicy" },
        { id: 53, category: "Stew", name: "Red Stew with Live Chicken", price: 175.00, desc: "Full pan" },
        { id: 54, category: "Stew", name: "Red Stew with Soft Chicken", price: 150.00, desc: "Full pan" },
        { id: 55, category: "Stew", name: "Red Stew with Fresh Fish", price: 175.00, desc: "Full pan" },
        { id: 56, category: "Stew", name: "Red Stew with Turkey", price: 175.00, desc: "Full pan" },
        { id: 57, category: "Stew", name: "Red Stew with Smoked Turkey", price: 175.00, desc: "Full pan" },
        { id: 58, category: "Stew", name: "Red Stew with Assorted Meat", price: 250.00, desc: "Shaki, cow skin, beef" },
        { id: 59, category: "Stew", name: "Efo Riro", price: 250.00, desc: "Full pan, spinach" },
        { id: 60, category: "Stew", name: "Ofada Sauce", price: 250.00, desc: "Full pan, spicy" },
        { id: 61, category: "Stew", name: "Ayamese Sauce", price: 250.00, desc: "Full pan, signature" },
        { id: 62, category: "Soups", name: "Ogbono", price: 200.00, desc: "Full pan, draw soup" },
        { id: 63, category: "Soups", name: "Okra", price: 200.00, desc: "Full pan" },
        { id: 64, category: "Soups", name: "Seafood Okra", price: 350.00, desc: "Full pan, shrimp & fish" },
        { id: 65, category: "Soups", name: "Egusi", price: 250.00, desc: "Full pan, melon seeds" },
        { id: 66, category: "Soups", name: "Egusi with Stockfish", price: 275.00, desc: "Full pan" },
        { id: 67, category: "Soups", name: "Oha", price: 300.00, desc: "Full pan, traditional" },
        { id: 68, category: "Soups", name: "Afang", price: 350.00, desc: "Full pan, leafy" },
        { id: 69, category: "Soups", name: "Catfish Peppersoup", price: 150.00, desc: "Full pan" },
        { id: 70, category: "Soups", name: "Tilapia Peppersoup", price: 130.00, desc: "Full pan" },
        { id: 71, category: "Soups", name: "Goat Meat Peppersoup", price: 200.00, desc: "Full pan" },
        { id: 72, category: "Soups", name: "Assorted Meat Peppersoup", price: 200.00, desc: "Full pan" },
        { id: 73, category: "Soups", name: "Ukodo (Yam & Plantain)", price: 250.00, desc: "Full pan, any protein" },
        { id: 74, category: "Proteins", name: "Fried Chicken Wings", price: 175.00, desc: "Full pan" },
        { id: 75, category: "Proteins", name: "Jerk Chicken Wings", price: 175.00, desc: "Full pan" },
        { id: 76, category: "Proteins", name: "Jerk Chicken Leg Quarters", price: 200.00, desc: "Full pan" },
        { id: 77, category: "Proteins", name: "Chicken Breast", price: 200.00, desc: "Full pan" },
        { id: 78, category: "Proteins", name: "Honey BBQ Wings", price: 175.00, desc: "Full pan" },
        { id: 79, category: "Proteins", name: "Sweet Asian Chili Wings", price: 175.00, desc: "Full pan" },
        { id: 80, category: "Proteins", name: "Honey Suya Wings", price: 175.00, desc: "Full pan" },
        { id: 81, category: "Proteins", name: "BBQ Meatballs", price: 150.00, desc: "Full pan" },
        { id: 82, category: "Proteins", name: "Grilled Shrimp", price: 140.00, desc: "Full pan" },
        { id: 83, category: "Proteins", name: "Fried Shrimp", price: 140.00, desc: "Full pan" },
        { id: 84, category: "Proteins", name: "Pan Seared Salmon", price: 250.00, desc: "Full pan" },
        { id: 85, category: "Proteins", name: "Salmon Nuggets", price: 250.00, desc: "Great for grits" },
        { id: 86, category: "Proteins", name: "Catfish Nuggets", price: 200.00, desc: "Great for grits" },
        { id: 87, category: "Proteins", name: "Fried Tilapia Filet", price: 200.00, desc: "Full pan" },
        { id: 88, category: "Proteins", name: "Fried Catfish Filet", price: 200.00, desc: "Full pan" },
        { id: 89, category: "Proteins", name: "Oxtails", price: 300.00, desc: "Full pan, tender" },
        { id: 90, category: "Proteins", name: "Goat Meat (Peppered/Grilled/Fried)", price: 300.00, desc: "Full pan" },
        { id: 91, category: "Proteins", name: "Suya", price: 250.00, desc: "Full pan, spicy skewers" },
        { id: 92, category: "Proteins", name: "Live Chicken", price: 150.00, desc: "Full pan" },
        { id: 93, category: "Proteins", name: "Soft Chicken", price: 120.00, desc: "Full pan" },
        { id: 94, category: "Proteins", name: "Turkey Wings", price: 150.00, desc: "Full pan" },
        { id: 95, category: "Proteins", name: "Lamb Chops (45 pcs)", price: 350.00, desc: "Full pan, 45 pieces" },
        { id: 96, category: "Side Dishes", name: "Fried Plantain", price: 80.00, desc: "Full pan" },
        { id: 97, category: "Side Dishes", name: "Seasoned Vegetable Medley", price: 80.00, desc: "Full pan" },
        { id: 98, category: "Side Dishes", name: "Buttered Corn on Cob", price: 80.00, desc: "Full pan" },
        { id: 99, category: "Side Dishes", name: "Candied Yams", price: 120.00, desc: "Full pan" },
        { id: 100, category: "Side Dishes", name: "Garlic Herb Roasted Potatoes", price: 120.00, desc: "Full pan" },
        { id: 101, category: "Side Dishes", name: "Mashed Potatoes", price: 100.00, desc: "Full pan" },
        { id: 102, category: "Side Dishes", name: "Asparagus", price: 80.00, desc: "Full pan" },
        { id: 103, category: "Side Dishes", name: "Collard Greens w/ Smoked Turkey", price: 140.00, desc: "Full pan" },
        { id: 104, category: "Side Dishes", name: "Spicy Cabbage w/ Smoked Turkey", price: 120.00, desc: "Full pan" },
        { id: 105, category: "Side Dishes", name: "Sweet Potato Mash", price: 100.00, desc: "Full pan" },
        { id: 106, category: "Side Dishes", name: "Honey Cornbread", price: 80.00, desc: "Full pan" },
        { id: 107, category: "Side Dishes", name: "Meaty Baked Beans", price: 120.00, desc: "Full pan" },
        { id: 108, category: "Side Dishes", name: "Classic Caesar Salad", price: 75.00, desc: "Full pan" },
        { id: 109, category: "Side Dishes", name: "Pounded Yam (per wrap)", price: 3.00, desc: "Each wrap" },
        { id: 110, category: "Side Dishes", name: "Plantain Flour (per wrap)", price: 3.00, desc: "Each wrap" },
        { id: 111, category: "Side Dishes", name: "Oat Flour (per wrap)", price: 3.00, desc: "Each wrap" },
        { id: 112, category: "Cocktails/Mocktails", name: "Mimosa", price: 6.00, desc: "Per glass, brunch" },
        { id: 113, category: "Cocktails/Mocktails", name: "Bellini", price: 6.00, desc: "Per glass" },
        { id: 114, category: "Cocktails/Mocktails", name: "Tequila Sunrise", price: 6.00, desc: "Per glass" }
      ];

      // ---------- GLOBAL CART STATE ----------
      let cart = [];
      const categories = ['All Items', ...new Set(menuItems.map(item => item.category))];

      // ---------- DOM ELEMENTS ----------
      const filterContainer = document.getElementById('filterContainer');
      const menuGrid = document.getElementById('menuGrid');
      const cartItemsContainer = document.getElementById('cartItemsContainer');
      const cartTotalAmount = document.getElementById('cartTotalAmount');
      const clearCartBtn = document.getElementById('clearCartBtn');

      // ---------- RENDER FILTERS ----------
      function renderFilters() {
        filterContainer.innerHTML = categories.map(cat => 
          `<button class="filter-btn ${cat === 'All Items' ? 'active' : ''}" data-filter="${cat}">${cat}</button>`
        ).join('');
      }

      // ---------- RENDER MENU (based on filter) ----------
      function renderMenu(filterCategory) {
        const filtered = filterCategory === 'All Items' 
          ? menuItems 
          : menuItems.filter(item => item.category === filterCategory);

        if (filtered.length === 0) {
          menuGrid.innerHTML = '<div class="no-items">✨ No items in this category yet ✨</div>';
          return;
        }

        menuGrid.innerHTML = filtered.map(item => `
          <div class="menu-card" data-id="${item.id}">
            <span class="menu-category">${item.category}</span>
            <div class="menu-name">${item.name}</div>
            <div class="menu-desc">${item.desc}</div>
            <div class="menu-price">$${item.price.toFixed(2)}</div>
            <div class="item-controls">
              <input type="number" min="1" value="1" class="qty-input" id="qty-${item.id}" step="1">
              <button class="add-btn" data-id="${item.id}">Add to cart</button>
            </div>
          </div>
        `).join('');
      }

      // ---------- ADD TO CART ----------
      function addToCart(itemId, quantity) {
        const item = menuItems.find(i => i.id === itemId);
        if (!item) return;
        const existing = cart.find(c => c.id === itemId);
        if (existing) existing.quantity += quantity;
        else cart.push({ id: item.id, name: item.name, price: item.price, quantity });
        updateCartDisplay();
      }

      // ---------- UPDATE CART UI (with EVENT DELEGATION for +/-) ----------
      function updateCartDisplay() {
        if (cart.length === 0) {
          cartItemsContainer.innerHTML = '<p style="color: #8f7a6a; padding: 0.5rem 0;">🛒 Your cart is empty.</p>';
          cartTotalAmount.textContent = '$0.00';
          return;
        }

        let html = '', total = 0;
        cart.forEach(item => {
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
                <span style="min-width: 26px; text-align: center; font-weight: 500;">${item.quantity}</span>
                <button class="cart-qty-btn" data-id="${item.id}" data-change="1">+</button>
              </div>
              <div class="cart-item-subtotal">$${subtotal.toFixed(2)}</div>
            </div>
          `;
        });

        cartItemsContainer.innerHTML = html;
        cartTotalAmount.textContent = `$${total.toFixed(2)}`;
        // No direct listeners here — delegation handles it (attached once in init)
      }

      // ---------- CLEAR CART ----------
      function clearCart() { cart = []; updateCartDisplay(); }

      // ---------- FILTER BUTTON LISTENERS ----------
      function attachFilterListeners() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.addEventListener('click', function(e) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderMenu(this.dataset.filter);
          });
        });
      }

      // ---------- PLACE ORDER (validation + summary) ----------
      function placeOrder() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const instructions = document.getElementById('instructions').value.trim();

        if (!name || !email || !phone || !address) {
          alert('❌ Please fill in all required fields: name, email, phone, address.');
          return;
        }
        if (cart.length === 0) {
          alert('🛒 Your cart is empty. Add delicious items!');
          return;
        }

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        let summary = `✅ ORDER PLACED (demo)\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\n`;
        if (instructions) summary += `Instructions: ${instructions}\n`;
        summary += `\n--- ORDER ---\n`;
        cart.forEach(item => summary += `${item.name} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}\n`);
        summary += `\nTOTAL: $${total.toFixed(2)}\n\nThank you, KaluKooks will confirm soon!`;
        alert(summary);
      }

      // ---------- EVENT DELEGATION for cart +/- (single listener) ----------
      function setupCartDelegation() {
        cartItemsContainer.addEventListener('click', (e) => {
          const btn = e.target.closest('.cart-qty-btn');
          if (!btn) return;
          e.preventDefault();
          const id = parseInt(btn.dataset.id);
          const change = parseInt(btn.dataset.change);
          const cartItem = cart.find(c => c.id === id);
          if (cartItem) {
            cartItem.quantity += change;
            if (cartItem.quantity <= 0) cart = cart.filter(c => c.id !== id);
            updateCartDisplay();
          }
        });
      }

      // ---------- ADD BUTTON DELEGATION (menu grid) ----------
      function setupAddButtonDelegation() {
        menuGrid.addEventListener('click', (e) => {
          const addBtn = e.target.closest('.add-btn');
          if (!addBtn) return;
          const id = parseInt(addBtn.dataset.id);
          const qtyInput = document.getElementById(`qty-${id}`);
          if (!qtyInput) return;
          let qty = parseInt(qtyInput.value);
          if (isNaN(qty) || qty < 1) qty = 1;
          addToCart(id, qty);
        });
      }

      // ---------- INITIALIZE ----------
      function init() {
        renderFilters();
        renderMenu('All Items');
        attachFilterListeners();
        updateCartDisplay();
        setupCartDelegation();    // ✅ ONE listener for all +/- buttons
        setupAddButtonDelegation(); // ✅ ONE listener for all add buttons
        clearCartBtn.addEventListener('click', clearCart);
        document.getElementById('placeOrderBtn').addEventListener('click', placeOrder);

        // mobile menu toggle (simple enhancement)
        const mobileIcon = document.querySelector('.mobile-menu');
        const navUl = document.querySelector('nav ul');
        if (mobileIcon) {
          mobileIcon.addEventListener('click', () => navUl.classList.toggle('active'));
        }
      }

      init();
    })();