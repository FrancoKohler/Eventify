/*ACTIVE DROPDOWN FOR LANGUAGE*/
const button = document.querySelector("#showicon");
const dropdownContent = document.querySelector(".dropdown-content");

button.addEventListener("click", function () {
  this.classList.toggle("selected");
  dropdownContent.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", () => {
  /* 1° CARROUSEL*/
  const divCarrouselContainer = document.querySelector("#divcarousel");
  const divWeekendContainer = document.querySelector("#carouselweekend");
  const divArtContainer = document.querySelector("#carouselart");
  const divCultureContainer = document.querySelector("#carousel-culture");
  const divNewsContainer = document.querySelector("#carouselnews");

  function displayDivCarrousel(eventsList) {
    if (divCarrouselContainer) {
      divCarrouselContainer.innerHTML = "";

      eventsList.forEach((event) => {
        const div = document.createElement("div");
        div.classList.add("events");
        div.innerHTML = `
        <img src="${event.imageUrl}" alt="${event.title}" class="imgcarousel" >
        <div class="eventinfo">
          <h3 class="h-event">${event.title}</h3>
          <a class="p-event">${event.time}</a>
        </div>
      `;
        div.addEventListener("click", (e) => {
          // Comprueba si el ID es 'charlie'
          if (
            event.id === "charlie" ||
            event.id === "zevra" ||
            event.id === "medusa" ||
            event.id === "montanejos"
          ) {
            window.location.href = `./html/eventpage.html?id=${event.id}`; // Permite la navegación
          } else {
            // Alerta que impide la navegación
            e.preventDefault(); // Evitar la redirección
            Swal.fire({
              title: "This feature is not yet available",
              text: "Came back later",
              customClass: {
                popup: "my-popup",
                title: "my-title",
                text: "my-text",
                confirmButton: "my-confirm-button",
              },
            });
          }
        });
        divCarrouselContainer.append(div);
      });
    }
  }

  function displayDivWeekend(weekendsList) {
    if (divWeekendContainer) {
      divWeekendContainer.innerHTML = "";

      weekendsList.forEach((weekend) => {
        const div = document.createElement("div");
        div.classList.add("events");
        div.innerHTML = `
          <img src="${weekend.imageUrl}" alt="${weekend.title}" class="imgcarousel">
          <div class="eventinfo">
            <h3 class="h-event">${weekend.title}</h3>
            <a class="p-event">${weekend.time}</a>
          </div>
        `;

        div.addEventListener("click", (event) => {
          // Comprueba si el ID es 'charlie'
          if (weekend.id === "charlie") {
            window.location.href = `./html/eventpage.html?id=${weekend.id}`; // Permite la navegación
          } else {
            // Alerta que impide la navegación
            event.preventDefault(); // Evitar la redirección
            Swal.fire({
              title: "This feature is not yet available",
              text: "Came back later",
              customClass: {
                popup: "my-popup",
                title: "my-title",
                text: "my-text",
                confirmButton: "my-confirm-button",
              },
            });
          }
        });
        divWeekendContainer.append(div);
      });
    }
  }

  function displayArtContainer(artEventsList) {
    if (divArtContainer) {
      divArtContainer.innerHTML = "";

      artEventsList.forEach((artEvent) => {
        const div = document.createElement("div");
        div.classList.add("events");
        div.innerHTML = `
        <img src="${artEvent.imageUrl}" alt="${artEvent.title}" class="imgcarousel">
        <div class="eventinfo">
          <h3 class="h-event">${artEvent.title}</h3>
          <a class="p-event">${artEvent.time}</a>
        </div>
      `;
        div.addEventListener("click", (event) => {
          // Alerta que impide la navegación
          event.preventDefault(); // Evitar la redirección
          Swal.fire({
            title: "This feature is not yet available",
            text: "Came back later",
            customClass: {
              popup: "my-popup",
              title: "my-title",
              text: "my-text",
              confirmButton: "my-confirm-button",
            },
          });
        });
        divArtContainer.append(div);
      });
    }
  }

  function displayDivCulture(cultureEventsList) {
    if (divCultureContainer) {
      divCultureContainer.innerHTML = "";

      cultureEventsList.forEach((cultureEvent) => {
        const div = document.createElement("div");
        div.classList.add("events");
        div.innerHTML = `
        <img src="${cultureEvent.imageUrl}" alt="${cultureEvent.title}" class="imgcarousel">
        <div class="eventinfo">
          <h3 class="h-event">${cultureEvent.title}</h3>
          <a class="p-event">${cultureEvent.time}</a>
        </div>
      `;
        div.addEventListener("click", (event) => {
          // Alerta que impide la navegación
          event.preventDefault(); // Evitar la redirección
          Swal.fire({
            title: "This feature is not yet available",
            text: "Came back later",
            customClass: {
              popup: "my-popup",
              title: "my-title",
              text: "my-text",
              confirmButton: "my-confirm-button",
            },
          });
        });
        divCultureContainer.append(div);
      });
    }
  }

  function displayNewsContainer(newsList) {
    if (divNewsContainer) {
      divNewsContainer.innerHTML = "";

      newsList.forEach((newsItem) => {
        const div = document.createElement("div");
        div.classList.add("news");
        div.innerHTML = `
                <img src="${newsItem.imageUrl}" alt="${newsItem.title}" class="img-news">
                <div class="news-info">
                    <h3 class="h-news">${newsItem.title}</h3>
                    <a class="p-news">${newsItem.content}</a>
                </div>
            `;
        div.addEventListener("click", (event) => {
          if (newsItem.id === "destinies") {
            // Navegar a newspage.html con el ID como parámetro
            window.location.href = `./html/newspage.html?id=${newsItem.id}`;
          } else {
            event.preventDefault(); // Evitar la redirección
            Swal.fire({
              title: "This feature is not yet available",
              text: "Come back later",
              customClass: {
                popup: "my-popup",
                title: "my-title",
                text: "my-text",
                confirmButton: "my-confirm-button",
              },
            });
          }
        });
        divNewsContainer.append(div);
      });
    }
  }

  /*LLAMAR A LAS FUNCIONES PARA MOSTRAR*/
  displayDivCarrousel(events);
  displayDivWeekend(weekends);
  displayArtContainer(artEvents);
  displayDivCulture(cultureEvents);
  displayNewsContainer(newsItems);
});

/*SLIDE CAROUSEL*/
function setupCarousel(nextBtn, prevBtn, divcarousels) {
  let positions = new Array(divcarousels.length).fill(0);

  nextBtn.addEventListener("click", () => {
    positions.forEach((position, index) => {
      position -= 50;
      if (position < -50) {
        position = -50;
      }
      applyTransition(divcarousels[index]);
      divcarousels[index].style.transform = `translateX(${position}%)`;
      positions[index] = position;
    });
  });

  prevBtn.addEventListener("click", () => {
    positions.forEach((position, index) => {
      position += 50;
      if (position > 0) {
        position = 0;
      }
      applyTransition(divcarousels[index]);
      divcarousels[index].style.transform = `translateX(${position}%)`;
      positions[index] = position;
    });
  });
}

function applyTransition(element) {
  element.style.transitionDuration = "1s";
}

/*SETUP FOR EACH CAROSUEL*/
/*TRENDING*/
setupCarousel(
  document.getElementById("next-btn"),
  document.getElementById("prev-btn"),
  [document.getElementById("divcarousel")]
);
/*ELECTRONIC*/
setupCarousel(
  document.getElementById("next-btn-weekend"),
  document.getElementById("prev-btn-weekend"),
  [document.getElementById("carouselweekend")]
);
/*ART*/
const divcarouselArt = document.getElementsByClassName("carouselart");
setupCarousel(
  document.getElementById("next-btn-art"),
  document.getElementById("prev-btn-art"),
  Array.from(divcarouselArt)
);
/*NEWS*/
const divcarouselNews = document.getElementsByClassName("carouselnews");
setupCarousel(
  document.getElementById("next-btn-news"),
  document.getElementById("prev-btn-news"),
  Array.from(divcarouselNews)
);
/*FOOTER FORM*/
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); /* PREVENTS EVENT STARTUP */

    /* GETS FORM ITEMS FROM THE DOC */
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    /*  ACTION IS SENT TO THE SERVERS */
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Mensaje:", message);

    /* SUCCESS TEXT */

    Swal.fire({
      title: "Thank you for reaching us",
      text: "We will be in touch with you soon. ",
      customClass: {
        popup: "my-popup",
        title: "my-title",
        text: "my-text",
        confirmButton: "my-confirm-button",
      },
    });
    /* RESETS FORM */
    document.getElementById("contact-form").reset();
  });

/*BG IMG INTERVAL*/
$(document).ready(function () {
  var images = [
    "event3.png",
    "event2.png",
    "conciert.png",
    "event4.png",
    "event5.jpg",
  ];
  var currentIndex = 0;
  var section = $("#section");

  function changeBackground() {
    var imageUrl = "assets/" + images[currentIndex];
    console.log("Changing background to: " + imageUrl);
    section.css("background-image", "url(" + imageUrl + ")");
    currentIndex = (currentIndex + 1) % images.length;
  }

  changeBackground();

  setInterval(changeBackground, 5000);
});
