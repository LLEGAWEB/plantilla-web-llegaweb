const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll(".navigation a");
const currentYear = document.querySelector("#current-year");
const contactForm = document.querySelector(".contact-form");

menuButton.addEventListener("click", () => {
  const menuIsOpen = navigation.classList.toggle("is-open");

  menuButton.setAttribute("aria-expanded", menuIsOpen);
  menuButton.textContent = menuIsOpen ? "✕" : "☰";
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

currentYear.textContent = new Date().getFullYear();

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  alert(
    "Formulario de demostración. Aquí conectaremos WhatsApp, correo o un servicio de formularios."
  );
});