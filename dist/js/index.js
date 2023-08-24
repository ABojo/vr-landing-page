const mobileNav = document.querySelector(".mobile-nav");
const mobileNavOpen = document.querySelector(".mobile-nav__open");
const mobileNavClose = document.querySelector(".mobile-nav__close");

function toggleMobileNav() {
  mobileNav.classList.toggle("mobile-nav--open");
}

mobileNavOpen.addEventListener("click", toggleMobileNav);
mobileNavClose.addEventListener("click", toggleMobileNav);
