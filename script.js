    (function(){
      "use strict";
      // ---------- MOBILE MENU ----------
      const mobileBtn = document.querySelector('.mobile-menu');
      const navUl = document.querySelector('nav ul');
      if(mobileBtn) {
        mobileBtn.addEventListener('click', () => navUl.classList.toggle('active'));
      }

      // ---------- SMOOTH SCROLL FOR ANCHOR LINKS ----------
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if(target) {
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            navUl.classList.remove('active');
          }
        });
      });

      // ---------- SAMPLE MENU ITEMS (homepage demo) ----------
      const sampleMenu = [
        { category: "Starters", name: "Crispy Calamari", desc: "Lemon aioli, pickled peppers", price: 14.5 },
        { category: "Brunch", name: "Avocado Benny", desc: "Poached eggs, hollandaise", price: 16.0 },
        { category: "Rice", name: "Coconut Rice", desc: "Jasmine, toasted coconut", price: 7.0 },
        { category: "Pasta", name: "Pomodoro e Basilico", desc: "San Marzano tomatoes", price: 18.0 },
        { category: "Proteins", name: "Grilled Salmon", desc: "Herb crust, lemon beurre blanc", price: 27.0 },
        { category: "Sides", name: "Truffle Fries", desc: "Parmesan, garlic aioli", price: 7.5 }
      ];
      const categories = ['All Items', ...new Set(sampleMenu.map(i => i.category))];
      const filterContainer = document.getElementById('filterContainer');
      const menuGrid = document.getElementById('menuGrid');

      function renderFilters() {
        filterContainer.innerHTML = categories.map(cat => 
          `<button class="filter-btn ${cat==='All Items'?'active':''}" data-filter="${cat}">${cat}</button>`
        ).join('');
      }
      function renderMenu(filter) {
        const items = filter==='All Items' ? sampleMenu : sampleMenu.filter(i => i.category===filter);
        if(items.length===0) { menuGrid.innerHTML = '<div class="no-items">✨ Coming soon ✨</div>'; return; }
        menuGrid.innerHTML = items.map(item => `
          <div class="menu-card">
            <span class="menu-category">${item.category}</span>
            <div class="menu-name">${item.name}</div>
            <div class="menu-desc">${item.desc}</div>
            <div class="menu-price">$${item.price.toFixed(2)}</div>
          </div>
        `).join('');
      }
      if(filterContainer && menuGrid) {
        renderFilters();
        renderMenu('All Items');
        document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderMenu(this.dataset.filter);
          });
        });
      }

      // ---------- TESTIMONIALS CAROUSEL ----------
      const testimonials = [
        { stars: '★★★★★', text: 'Chef Kalu transformed our regular Saturday into an unforgettable dining experience. The flavors were exquisite!', name: 'Jennifer R.', role: 'Weekend Dinner' },
        { stars: '★★★★★', text: 'Hiring Chef Kalu for our anniversary was the best decision. Guests are still talking about it weeks later.', name: 'Michael T.', role: 'Anniversary Event' },
        { stars: '★★★★★', text: 'Our engagement dinner was perfect thanks to Kalu. A custom menu that reflected our journey. Truly magical!', name: 'Sarah & David', role: 'Engagement Dinner' }
      ];
      const carousel = document.getElementById('testimonialCarousel');
      let currentIndex = 0;
      function renderTestimonials() {
        if(!carousel) return;
        let visible = 3;
        if(window.innerWidth < 992) visible = 2;
        if(window.innerWidth < 768) visible = 1;
        let html = '';
        for(let i=0; i<visible; i++) {
          let idx = (currentIndex + i) % testimonials.length;
          let t = testimonials[idx];
          html += `<div class="testimonial-card">
            <div class="stars">${t.stars}</div>
            <blockquote>${t.text}</blockquote>
            <div class="client-name">${t.name}</div>
            <div class="client-role">${t.role}</div>
          </div>`;
        }
        carousel.innerHTML = html;
      }
      document.getElementById('prevBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        renderTestimonials();
      });
      document.getElementById('nextBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % testimonials.length;
        renderTestimonials();
      });
      renderTestimonials();
      window.addEventListener('resize', renderTestimonials);
    })();