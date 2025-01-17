let burgerBtn = document.getElementById("burgerBtn");
let sidebar = document.getElementById("sidebarMob");

function slideNav() {
  burgerBtn.classList.toggle("active");
  if (burgerBtn.classList.contains("active")) {
    sidebar.style.transform = "translateX(250px)";
  }
  //   else {
  //     sidebar.style.transform = "translateX(-250px)";
  //   }
}

function closeNav() {
  burgerBtn.classList.remove("active");
  sidebar.style.transform = "translateX(-250px)";
}
