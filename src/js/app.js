import slider from "./modules/slider.js";
import menuBurger from "./modules/burger.js";

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  menuBurger();

  // Slider

  const width = window.innerWidth;
  
  if (width > 768) {
    slider();
  }
});