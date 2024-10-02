document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get("id");
  const weekendId = urlParams.get("weekendId");
  const artEventId = urlParams.get("artEventId");
  const cultureEventId = urlParams.get("cultureEventId");
  const event = events.find((event) => event.id === eventId);
  const weekend = weekends.find((weekend) => weekend.id === weekendId);
  const artEvent = artEvents.find((artEvent) => artEvent.id === artEventId);
  const cultureEvent = cultureEvents.find(
    (cultureEvent) => cultureEvent.id === cultureEventId
  );

  if (event) {
    populateEventData(event, events);
  } else if (weekend) {
    populateWeekendData(weekend);
  } else if (artEvent) {
    populateArtEventData(artEvent);
  } else if (cultureEvent) {
    populateCultureEventData(cultureEvent);
  }

  function populateEventData(event, events) {
    document.getElementById("title").textContent = event.title;
    document.getElementById("time").textContent = event.time;
    document.getElementById("imageUrlDt").src = event.imageUrlDt;
    document.getElementById("info").textContent = event.info;
    document.getElementById("location").textContent = event.location;
    document.getElementById("locationUrl").src = event.locationUrl;
    document.getElementById("logoUrl").src = event.logoUrl;
    document.getElementById("timeInfo").innerHTML = event.timeInfo;

    const subInfoContainer = document.getElementById("otherInfo");
    subInfoContainer.innerHTML = "";

    event.subInfos.forEach((subInfo) => {
      const subInfoDiv = document.createElement("div");
      subInfoDiv.className = "sub-info-item";

      const subInfoContentDiv = document.createElement("div");
      subInfoContentDiv.className = "sub-info-content";

      const subInfoImg = document.createElement("img");
      subInfoImg.src = subInfo.image;
      subInfoImg.className = "sub-info-img";

      const subInfoTextDiv = document.createElement("div");
      subInfoTextDiv.className = "sub-info-text";

      const subInfoMain = document.createElement("p");
      subInfoMain.textContent = subInfo.main;
      subInfoMain.className = "sub-info-main";

      const subInfoLow = document.createElement("p");
      subInfoLow.textContent = subInfo.low;
      subInfoLow.className = "sub-info-low";

      subInfoTextDiv.appendChild(subInfoMain);
      subInfoTextDiv.appendChild(subInfoLow);

      subInfoContentDiv.appendChild(subInfoImg);
      subInfoContentDiv.appendChild(subInfoTextDiv);

      subInfoDiv.appendChild(subInfoContentDiv);
      subInfoContainer.appendChild(subInfoDiv);
    });

    const priceContainer = document.getElementById("pricesContainer");
    priceContainer.innerHTML = "";

    event.prices.forEach((price) => {
      // renamed event to evt to avoid variable shadowing
      const priceDiv = document.createElement("div");
      priceDiv.className = "price-item";

      const title = document.createElement("div");
      title.className = "price-title";
      title.textContent = price.title;

      const priceValue = document.createElement("div");
      priceValue.className = "price-value";
      priceValue.textContent = price.price;

      priceDiv.appendChild(title);
      priceDiv.appendChild(priceValue);

      priceContainer.appendChild(priceDiv);
    });
  }

  function populateWeekendData(weekend) {
    document.getElementById("title").textContent = weekend.title;
    document.getElementById("time").textContent = weekend.time;
    document.getElementById("imageUrlDt").src = weekend.imageUrl;
    // Update other weekend details as needed
  }

  function populateArtEventData(artEvent) {
    document.getElementById("title").textContent = artEvent.title;
    document.getElementById("time").textContent = artEvent.time;
    document.getElementById("imageUrlDt").src = artEvent.imageUrl;
    // Update other art event details as needed
  }

  function populateCultureEventData(cultureEvent) {
    document.getElementById("title").textContent = cultureEvent.title;
    document.getElementById("time").textContent = cultureEvent.time;
    document.getElementById("imageUrlDt").src = cultureEvent.imageUrl;
    // Update other culture event details as needed
  }
});
/*BUTTON FOR BUY*/
document.addEventListener("DOMContentLoaded", function () {
  const buyTicketsBtn = document.getElementById("buyTicketsBtn");

  buyTicketsBtn.addEventListener("click", function () {
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
});

function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Obtener el ID del parámetro de la URL
const newsId = getUrlParameter("id");

// Buscar el artículo de noticias por ID y poblar la página
const newsItem = newsItems.find((item) => item.id === newsId);
if (newsItem) {
  document.getElementById("title").textContent = newsItem.title;
  document.getElementById("content").textContent = newsItem.content;
  document.getElementById("destinie1").textContent = newsItem.destinieOneHeader;
  document.getElementById("pdestinie1").textContent = newsItem.destinieOneP;
  document.getElementById("img1").src = newsItem.imageOne;
  document.getElementById("destinie2").textContent = newsItem.destinieTwoHeader;
  document.getElementById("pdestinie2").textContent = newsItem.destinieTwoP;
  document.getElementById("img2").src = newsItem.imageTwo;
  document.getElementById("destinie3").textContent =
    newsItem.destinieThreeHeader;
  document.getElementById("pdestinie3").textContent = newsItem.destinieThreeP;
  document.getElementById("img3").src = newsItem.imageThree;
  document.getElementById("destinie4").textContent =
    newsItem.destinieFourHeader;
  document.getElementById("pdestinie4").textContent = newsItem.destinieFourP;
  document.getElementById("img4").src = newsItem.imageFour;
  document.getElementById("destinie5").textContent =
    newsItem.destinieFiveHeader;
  document.getElementById("pdestinie5").textContent = newsItem.destinieFiveP;
  document.getElementById("img5").src = newsItem.imageFive;
} else {
  console.error(
    "No se encontró ningún artículo de noticias con el ID especificado."
  );
}
