const menuContainer = document.querySelectorAll(".parentAndChildrenWrapper");

menuContainer.forEach((wrapper) => {
  const menuButton = wrapper.querySelector(".menuLinks");
  const subMenu = wrapper.querySelector(".subMenuBox");

  menuButton.addEventListener("click", function (event) {
    event.preventDefault();

    subMenu.classList.toggle("active");
  });
});
