/*ACTIVE DROPDOWN FOR LANGUAGE*/
const button = document.querySelector("#showicon");
const dropdownContent = document.querySelector(".dropdown-content");

button.addEventListener("click", function () {
  this.classList.toggle("selected");
  dropdownContent.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "url(../assets/event1.png)",
    "url(../assets/event2.png)",
    "url(../assets/event3.png)",
    "url(../assets/event4.png)",
    "url(../assets/event5.jpg)",
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
        div.addEventListener("click", () => {
          window.location.href = `./html/eventpage.html?id=${event.id}`;
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
        div.addEventListener("click", () => {
          window.location.href = `./html/eventpage.html?id=${weekend.id}`;
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
        div.addEventListener("click", () => {
          window.location.href = `./html/eventpage.html?id=${artEvent.id}`;
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
        div.addEventListener("click", () => {
          window.location.href = `./html/eventpage.html?id=${cultureEvent.id}`;
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
        div.addEventListener("click", () => {
          window.location.href = "./html/eventpage.html?id=" + newsItem.id; // Cambiado a la página de detalle de noticias
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
  displayNewsContainer(newsItem);
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
      icon: "success",
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
