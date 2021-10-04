const parentAndChildrenWrappers = document.querySelectorAll(
  ".parentAndChildrenWrapper"
);

parentAndChildrenWrappers.forEach((wrapper) => {
  const hoverElement = wrapper.querySelector(".menuLinks");
  const hiddenList = wrapper.querySelector(".childrenWrapper");
  hoverElement.addEventListener("mouseover", () => {
    hiddenList.classList.add("active");
  });
  hoverElement.addEventListener("mouseout", () => {
    setTimeout(() => {
      hiddenList.classList.remove("active");
    }, 400);
  });
});
