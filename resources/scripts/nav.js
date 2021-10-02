const listWrappers = document.querySelectorAll(".listWrapper");

listWrappers.forEach((wrapper) => {
  const hoverElement = wrapper.querySelector(".visibleLinks");
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
