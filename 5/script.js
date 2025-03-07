const promotionSection = document.getElementById("message-container");
const promotionLabel = document.createElement("div");
const offer = document.createElement("p");

function addRabatt() {
  offer.textContent = "Special Offer: Get 20% of your next purchase!";
  offer.style.fontSize = "3rem";
  offer.style.color = "red";
  offer.style.textShadow = "2px 2px 2px #ff0000";
  offer.style.backgroundColor = "rgb(242, 235, 29)";
  offer.style.textAlign = "center";
  promotionLabel.appendChild(offer);
  promotionSection.appendChild(promotionLabel);
}

const timerRabatt = setTimeout(addRabatt, 3000);
