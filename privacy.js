// Mobile menu toggle
(function () {
  const mobileBtn = document.querySelector(".mobile-menu");
  const navUl = document.querySelector("nav ul");
  if (mobileBtn) {
    mobileBtn.addEventListener("click", () => navUl.classList.toggle("active"));
  }
  // Smooth scroll for any anchor links (though unlikely here)
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
})();
