document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar-fixed");
  const year = document.querySelector("#currentYear");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const handleScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      const navbarCollapse = document.querySelector(".navbar-collapse.show");
      if (navbarCollapse && window.innerWidth < 992) {
        bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
      }
    });
  });
});
