/*CHANGING BACKGROUND WITH INTERVAL*/
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "url(./assets/event1.png)",
    "url(./assets/event2.png)",
    "url(./assets/event3.png)",
    "url(./assets/event4.png)",
    "url(./assets/event5.jpg)",
  ];

  let currentIndex = 0;

  function changeBackground() {
    const backgroundContainer = document.querySelector("#section");
    if (backgroundContainer) {
      backgroundContainer.style.backgroundImage = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }
  }

  setInterval(changeBackground, 5000);
  changeBackground();
  changeBackground();
});

/*DROPDOWN CONTENT*/
/* document.addEventListener("DOMContentLoaded", () => {
  const dropdownImage = document.getElementById("dropdownImage");
  const dropdownContent = document.getElementById("dropdownContent");

  dropdownImage.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
  });

  // Ocultar el dropdown si se hace clic fuera de él
  window.addEventListener("click", () => {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  });
});
 */
