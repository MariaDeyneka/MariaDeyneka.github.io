if (window.innerWidth <= 900) {
  const imageContainer = document.getElementById("smallImage");
  const img = document.createElement("img");
  img.src = "images/logo_circle.svg";
  img.alt = "logo_circle";
  img.className = "logo";
  imageContainer.appendChild(img);
} else {
  const imageContainer = document.getElementById("largeImage");
  const img = document.createElement("img");
  img.src = "images/logo_big.svg";
  img.alt = "logo_big";
  img.className = "logo";
  imageContainer.appendChild(img);
}
