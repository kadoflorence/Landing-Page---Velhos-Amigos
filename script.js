let slides = document.querySelectorAll(".banner-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Mudar a cada 3 segundos

function openNavigationApp() {
  const latitude = "-27.583334"; // Substitua pela latitude desejada
  const longitude = "-48.582160"; // Substitua pela longitude desejada
  const destination = latitude + "," + longitude;

  const wazeURL = "waze://?ll=" + destination + "&navigate=yes";
  const mapsURL =
    "https://www.google.com/maps/dir/?api=1&destination=" + destination;

  // Tenta abrir o Waze
  window.location.href = wazeURL;

  // Após um pequeno atraso, tenta abrir o Google Maps caso o Waze não esteja disponível
  setTimeout(function () {
    window.location.href = mapsURL;
  }, 500);
}
