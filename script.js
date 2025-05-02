const menuHamburguer = document.querySelector(".menu-hamburguer");
const navResponsive = document.querySelector(".nav-responsive");
function toggleMenu() {
  menuHamburguer.classList.toggle("change");
  if (menuHamburguer.classList.contains("change")) {
    navResponsive.style.display = "flex";
  } else {
    navResponsive.style.display = "none";
  }
}

// Adicionar no menu hamburger um cara que vai ficar por conta de vigiar ele pra sqaber qdo acontecer algo com ele

menuHamburguer.addEventListener("click", toggleMenu);
