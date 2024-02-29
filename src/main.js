const burgerMenu = document.getElementById("burgerMenu");
const globalContainer = document.getElementById("globalContainer");
const myNav = document.getElementById("myNav");

const desktopHeader = document.getElementById("desktop-header");
const link = document.getElementById("nav-link");
const dropdown = document.getElementById("menu-dropdown");

let isMenuOpen = false;

const menuBtn = document.getElementById("menuBtn");

const showBurgerMenu = () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    burgerMenu.classList.add("show-menu");
    menuBtn.classList.add("menu-toggle");
    document.body.style.overflow = "hidden";
  } else {
    burgerMenu.classList.remove("show-menu");
    menuBtn.classList.remove("menu-toggle");
    document.body.style.overflow = "visible";
  }
};

// menuBtn.addEventListener("click", showBurgerMenu);

window.onscroll = () => {
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};

console.log(link);

const handleDropdown = () => {
  if (desktopHeader.classList.contains("header-padding")) {
    setTimeout(() => desktopHeader.classList.remove("header-padding"), 700);
    desktopHeader.classList.add("header");
    setTimeout(() => dropdown.classList.remove("show-item"), 600);
    // setTimeout(() => dropdown.classList.add("height-zero"), 200);
    // dropdown.classList.add("height-zero");
    setTimeout(() => {
      dropdown.classList.remove("height-screen");
      dropdown.classList.add("height-zero");
    }, 300);
  } else {
    desktopHeader.classList.add("header-padding");
    desktopHeader.classList.remove("header");
    dropdown.classList.add("height-screen");
    dropdown.classList.remove("height-zero");
    setTimeout(() => dropdown.classList.add("show-item"), 200);
  }
};

link.addEventListener("click", handleDropdown);
