export const projectCards = () => {
  let cardData = [
    {
      image: "projects-red-building",
      header: "Red Finger Building",
      text: "Business Centers",
    },
    {
      image: "projects-cubes-building",
      header: "Cubes Building",
      text: "Business Centers",
    },
    {
      image: "projects-pencil-building",
      header: "The Pencil Building",
      text: "Stores & Malls",
    },
    {
      image: "projects-cubes-building",
      header: "Cubes Building",
      text: "Business Centers",
    },
    {
      image: "projects-pencil-building",
      header: "The Pencil Building",
      text: "Stores & Malls",
    },
    {
      image: "projects-red-building",
      header: "Red Finger Building",
      text: "Business Centers",
    },
  ];

  const cardImage = document.querySelectorAll(".project-card__image");
  const cardHeader = document.querySelectorAll(".project-card__header");
  const cardText = document.querySelectorAll(".project-card__text");

  if (cardImage && cardHeader && cardText) {
    cardData.forEach((card, index) => {
      cardImage[index].setAttribute(
        "src",
        `/images/section-projects/${card.image}@1x.jpg`
      );
      cardImage[index].setAttribute(
        "srcset",
        `/images/section-projects/${card.image}@2x.jpg`
      );
      cardHeader[index].innerHTML = card.header;
      cardText[index].innerHTML = card.text;
    });
  }
};
