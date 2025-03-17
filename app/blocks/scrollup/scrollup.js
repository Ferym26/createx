export const scrollUp = () => {
  const scrollUpButton = document.querySelector(".scrollup__button");

  scrollUpButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
