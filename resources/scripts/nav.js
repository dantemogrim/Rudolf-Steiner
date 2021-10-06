// Desktop menu.
const menuContainer = document.querySelectorAll(".parentAndChildrenWrapper");

menuContainer.forEach((wrapper) => {
  // Huvudlänkar.
  const menuButton = wrapper.querySelector(".menuLinks");
  // Sublänkar.
  const subMenu = wrapper.querySelector(".subMenuBox");

  menuButton.addEventListener("click", function (event) {
    event.preventDefault();

    // let activeElements = document.getElementsByClassName("active").length;
    let activeElements = document.querySelectorAll(".active").length;

    // if (activeElements === 0) {
    //   subMenu.classList.add("active");
    // } else {
    //   subMenu.classList.add("shutdown");
    // }

    subMenu.classList.toggle("active");
  });
});

// Hamburger menu in mobile view.
const hamburgerButton = document.querySelector(".hamburgerButton");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("overlay");
});

// Closing menu while mobile menu is opened.
const closeMenuButton = document.querySelector(".closeMenuButton");
closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("overlay");
});
