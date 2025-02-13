export const pageUp = () => {
  document.querySelector("scrollup-button").addEventListener("click", () => {
    window.scroll(0, 0);
  });
};
