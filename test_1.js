document.addEventListener("DOMContentLoaded", function () {
  const carousselContent = document.querySelector(".voiture_grille");

  // Données des voitures (basées sur ton HTML)
  const cars = [
    {
      img: "https://images.netdirector.co.uk/gforces-auto/image/upload/w_585,h_390,q_auto,c_fill,f_auto,fl_lossy/auto-client/ac0ffd18e7a826e2a1559978ff3a21fa/e_200.png",
      title: "Classe E",
      price: "à partir de 669 000DH",
    },
    {
      img: "https://images.netdirector.co.uk/gforces-auto/image/upload/w_585,h_390,q_auto,c_fill,f_auto,fl_lossy/auto-client/071a8fcebe01d097491610b59f7a9bf4/high_tech_silver_metallic.png",
      title: "Classe S",
      price: "à partir de 1 630 000DH",
    },
    {
      img: "https://images.netdirector.co.uk/gforces-auto/image/upload/w_585,h_390,q_auto,c_fill,f_auto,fl_lossy/auto-client/071a8fcebe01d097491610b59f7a9bf4/high_tech_silver_metallic.png",
      title: "Classe S",
      price: "Prix disponible à la demande",
    },
    {
      img: "https://images.netdirector.co.uk/gforces-auto/image/upload/w_585,h_390,q_auto,c_fill,f_auto,fl_lossy/auto-client/071a8fcebe01d097491610b59f7a9bf4/high_tech_silver_metallic.png",
      title: "Classe S",
      price: "Prix disponible à la demande",
    },
    {
      img: "https://images.netdirector.co.uk/gforces-auto/image/upload/w_585,h_390,q_auto,c_fill,f_auto,fl_lossy/auto-client/071a8fcebe01d097491610b59f7a9bf4/high_tech_silver_metallic.png",
      title: "Classe S",
      price: "Prix disponible à la demande",
    },
  ];

  // Générer dynamiquement le contenu du carrousel
  carousselContent.innerHTML = cars
    .map(
      (car) => `
      <div class="v1">
        <img src="${car.img}" alt="${car.title}" class="img_merc"/>
        <div class="v2">
          <span>
            <h3 class="titre_voiture"><center>${car.title}</center></h3>
            <p class="text_prix">
              ${car.price}<br />
              <a href="" class="savoir_plus"> En savoir plus</a>
            </p>
          </span>
        </div>
      </div>
    `
    )
    .join("");

  // Sélection des éléments
  const slides = document.querySelectorAll(".v1");
  const totalSlides = slides.length;
  const visibleSlides = 3; // Nombre de voitures visibles
  const container = document.querySelector(".voiture_grille");
  let slideIndex = 0;
  let slideWidth = slides[0].offsetWidth + 20; // Largeur d'une voiture + marge

  // Mise à jour de l'affichage du carrousel
  function updateSlides() {
    const offset = -slideIndex * slideWidth;
    container.style.transition = "transform 0.5s ease-in-out";
    container.style.transform = `translateX(${offset}px)`;
  }

  // Gestion des boutons de navigation
  function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > totalSlides - visibleSlides) {
      slideIndex = totalSlides - visibleSlides;
    }
    if (slideIndex < 0) {
      slideIndex = 0;
    }
    updateSlides();
  }

  // Ajustement en fonction de la taille de l'écran
  window.addEventListener("resize", () => {
    slideWidth = slides[0].offsetWidth + 20;
    updateSlides();
  });

  // Ajout des événements aux boutons
  document
    .querySelector(".prev")
    .addEventListener("click", () => plusSlides(-1));
  document
    .querySelector(".next")
    .addEventListener("click", () => plusSlides(1));

  // Initialisation du carrousel
  updateSlides();
});
