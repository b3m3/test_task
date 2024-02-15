import {sliderMenu, sliderGallery} from "./modules/slider.js";
import galleryModal from "./modules/galleryModal.js";
import menuBurger from "./modules/burger.js";
import menuPopup from "./modules/menuPopup.js";

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  menuBurger();
  galleryModal();
  menuPopup();

  // Sliders
  
  const width = window.innerWidth;
  
  if (width > 768) {
    sliderMenu();
  }

  if (width < 526) {
    sliderGallery();
  }
});