// Desktop menu.
const menuContainer = document.querySelectorAll(".parentAndChildrenWrapper");

menuContainer.forEach((wrapper) => {
  const menuButton = wrapper.querySelector(".menuLinks");
  const subMenu = wrapper.querySelector(".subMenuBox");

  menuButton.addEventListener("click", function (event) {
    event.preventDefault();

    subMenu.classList.toggle("active");
  });
});

// Hamburger menu in mobile view.
const hamburgerButton = document.querySelector(".hamburgerButton");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("overlay");

  // function changeImage() {
  //   const hamburgerIcon = document.querySelector(".hamburgerIcon");
  //   if (hamburgerIcon.src.match("list")) {
  //     hamburgerIcon.src = "<?= get_template_directory_uri(); ?>/icons/x.svg";
  //   } else {
  //     hamburgerIcon.src = "<?= get_template_directory_uri(); ?>/icons/list.svg";
  //   }
  // }

  // changeImage();
});

// Closing menu while mobile menu is opened.
const closeMenuButton = document.querySelector(".closeMenuButton");
closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("overlay");
});
