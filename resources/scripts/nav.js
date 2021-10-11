// Desktop menu.
const menuContainer = document.querySelectorAll(".primaryAndSubWrapper");

menuContainer.forEach((wrapper) => {
  const menuButton = wrapper.querySelector(".primaryLinks");
  const subMenu = wrapper.querySelector(".subMenuBox");

  menuButton.addEventListener("click", function (event) {
    event.preventDefault();

    checkForAlreadyActiveMenus();

    subMenu.classList.toggle("active");
  });
});

function checkForAlreadyActiveMenus() {
  console.log("Ready to remove active classes or maybe display none them!");
}

// Hamburger menu in mobile view.
const hamburgerOpenButton = document.querySelector(".hamburgerOpenButton");
const mobileMenu = document.querySelector(".mobileMenuOverlay");

hamburgerOpenButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("overlay");
});

// Closing menu while mobile menu is opened.
const hamburgerCloseButton = document.querySelector(".hamburgerCloseButton");
hamburgerCloseButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("overlay");
});

// Mobile menu rainbow colors on main links.
let mainLink = document.querySelectorAll(".caretLinkWrapper");

const rainbow = [
  "menuMainLinkBlue",
  "menuMainLinkGreen",
  "menuMainLinkYellow",
  "menuMainLinkRed",
];

window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 560px)").matches) {
    //
  } else {
    addColors();
  }
});

window.onload = () => {
  if (window.matchMedia("(max-width: 560px)").matches) {
    addColors();
  }
};

function addColors() {
  mainLink[0].classList.add(rainbow[0]);
  mainLink[1].classList.add(rainbow[1]);
  mainLink[2].classList.add(rainbow[2]);
  mainLink[3].classList.add(rainbow[3]);
}
