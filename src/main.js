const burgerMenu = document.getElementById("burgerMenu");
const globalContainer = document.getElementById("globalContainer");
const myNav = document.getElementById("myNav");

let isMenuOpen = false;

const menuBtn = document.getElementById("menuBtn");

const showBurgerMenu = () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    burgerMenu.classList.add("show-menu");
    document.body.style.overflow = "hidden";
  } else {
    burgerMenu.classList.remove("show-menu");
    document.body.style.overflow = "visible";
  }
};

menuBtn.addEventListener("click", showBurgerMenu);

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

  console.log("HII");
};
