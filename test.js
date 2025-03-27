document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".category_link");
  const carousels = document.querySelectorAll(".voiture_grille");
  let currentSliderFunction = null;

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le rechargement de la page

      // Supprimer la classe active des autres liens
      categoryLinks.forEach((l) => l.classList.remove("active"));

      // Ajouter la classe active à l'élément cliqué
      this.classList.add("active");
    });
  });

  function initSlider(container) {
    let slideIndex = 0;
    let slides = container.querySelectorAll(".v1");

    if (slides.length === 0) {
      console.warn("Aucun slide trouvé pour", container.id);
      return null;
    }

    let totalSlides = slides.length;
    let visibleSlides = 3;
    let slideWidth = slides[0].offsetWidth + 20;

    // Récupérer le conteneur parent et les boutons
    const carouselContainer = container.parentElement;
    const prevBtn = carouselContainer.querySelector(".prev");
    const nextBtn = carouselContainer.querySelector(".next");

    // Fonction pour mettre à jour la position des slides
    function updateSlides() {
      const offset = -slideIndex * slideWidth;
      container.style.transform = `translateX(${offset}px)`;
    }

    // Fonction pour avancer/reculer
    function plusSlides(n) {
      slideIndex += n;
      if (slideIndex > totalSlides - visibleSlides) {
        slideIndex = totalSlides - visibleSlides;
      }
      if (slideIndex < 0) {
        slideIndex = 0;
      }
      updateSlides();
      updateButtonsState();
    }

    // Désactiver les boutons si nécessaire
    function updateButtonsState() {
      if (prevBtn && nextBtn) {
        if (totalSlides <= visibleSlides) {
          prevBtn.disabled = true;
          nextBtn.disabled = true;
          prevBtn.style.opacity = "0.5"; // Rendre visuellement désactivé
          nextBtn.style.opacity = "0.5";
        } else {
          prevBtn.disabled = slideIndex === 0;
          nextBtn.disabled = slideIndex >= totalSlides - visibleSlides;
          prevBtn.style.opacity = prevBtn.disabled ? "0.5" : "1";
          nextBtn.style.opacity = nextBtn.disabled ? "0.5" : "1";
        }
      }
    }

    // Mettre à jour la taille lors du redimensionnement
    window.addEventListener("resize", () => {
      slideWidth = slides[0].offsetWidth + 20;
      updateSlides();
      updateButtonsState();
    });

    updateSlides();
    updateButtonsState();

    return plusSlides;
  }

  function switchCarousel(target) {
    // Masquer tous les carrousels
    carousels.forEach((carousel) => {
      carousel.classList.add("hidden");
    });

    // Afficher le carrousel sélectionné
    const selectedCarousel = document.getElementById(target);
    if (selectedCarousel) {
      selectedCarousel.classList.remove("hidden");

      // Attendre la mise à jour du DOM avant d'initialiser le slider
      setTimeout(() => {
        currentSliderFunction = initSlider(selectedCarousel);

        const carouselContainer = selectedCarousel.parentElement;
        if (carouselContainer) {
          const prevBtn = carouselContainer.querySelector(".prev");
          const nextBtn = carouselContainer.querySelector(".next");

          if (prevBtn && nextBtn) {
            prevBtn.onclick = () => {
              if (currentSliderFunction) currentSliderFunction(-1);
            };
            nextBtn.onclick = () => {
              if (currentSliderFunction) currentSliderFunction(1);
            };
          }
        }
      }, 100);
    }
  }

  // Gestion des liens de catégorie
  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = this.getAttribute("data-target");
      switchCarousel(target);
    });
  });

  // Initialisation du carrousel visible par défaut
  const defaultCarousel = document.querySelector(
    ".voiture_grille:not(.hidden)"
  );
  if (defaultCarousel) {
    setTimeout(() => {
      currentSliderFunction = initSlider(defaultCarousel);
      const carouselContainer = defaultCarousel.parentElement;
      if (carouselContainer) {
        const prevBtn = carouselContainer.querySelector(".prev");
        const nextBtn = carouselContainer.querySelector(".next");
        if (prevBtn && nextBtn) {
          prevBtn.onclick = () => {
            if (currentSliderFunction) currentSliderFunction(-1);
          };
          nextBtn.onclick = () => {
            if (currentSliderFunction) currentSliderFunction(1);
          };
        }
      }
    }, 100);
  }
});
