document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get("id");
  const weekendId = urlParams.get("weekendId");
  const artEventId = urlParams.get("artEventId");
  const cultureEventId = urlParams.get("cultureEventId");
  const newsId = urlParams.get("newsId");

  const event = events.find((event) => event.id === eventId);
  const weekend = weekends.find((weekend) => weekend.id === weekendId);
  const artEvent = artEvents.find((artEvent) => artEvent.id === artEventId);
  const cultureEvent = cultureEvents.find(
    (cultureEvent) => cultureEvent.id === cultureEventId
  );
  const news = newsItem.find((news) => news.id === newsId);

  if (event) {
    populateEventData(event, events);
  } else if (weekend) {
    populateWeekendData(weekend);
  } else if (artEvent) {
    populateArtEventData(artEvent);
  } else if (cultureEvent) {
    populateCultureEventData(cultureEvent);
  } else if (news) {
    populateNewsData(news);
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

  function populateNewsData(news) {
    document.getElementById("title").textContent = news.title;
    document.getElementById("info").textContent = news.content;
    document.getElementById("imageUrlDt").src = news.imageUrl;
    // Update other news details as needed
  }
});
/*BUTTON FOR BUY*/
document.addEventListener("DOMContentLoaded", function () {
  const buyTicketsBtn = document.getElementById("buyTicketsBtn");

  buyTicketsBtn.addEventListener("click", function () {
    Swal.fire({
      icon: "error",
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
