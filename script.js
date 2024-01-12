const modal = document.querySelector("#modal");
const openModalButton = document.querySelector(".open-button");
const closeModalButton = document.querySelector(".close-button");

openModalButton.addEventListener("click", (event) => {
  event.preventDefault();
  modal.showModal();
});

closeModalButton.addEventListener("click", () => {
  modal.close();
});

// Add this script to toggle the menu bar
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".nav-links ul");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});
