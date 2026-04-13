const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const filterButtons = document.querySelectorAll(".filter-btn");
const postCards = document.querySelectorAll(".post-card");
const newsletterForm = document.getElementById("newsletterForm");
const formMessage = document.getElementById("formMessage");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    postCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();

    if (!emailValue) {
      formMessage.textContent = "Please enter your email address.";
      return;
    }

    formMessage.textContent =
      "Thanks for subscribing. This demo form is ready to be connected to a real email service.";
    newsletterForm.reset();
  });
}