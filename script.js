
const languageBtn = document.getElementById("languageBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

let currentLanguage = "en";

// Switch between English and Japanese.
languageBtn.addEventListener("click", function () {
  currentLanguage = currentLanguage === "en" ? "ja" : "en";

  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-en][data-ja]").forEach(function (element) {
    element.textContent = element.getAttribute(
      "data-" + currentLanguage
    );
  });

  languageBtn.textContent =
    currentLanguage === "en" ? "日本語" : "English";
});

// Open and close the mobile navigation menu.
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.textContent = isOpen ? "×" : "☰";
});

// Close the mobile menu after selecting a section.
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

// Show the current year in the footer.
document.getElementById("year").textContent =
  new Date().getFullYear();
