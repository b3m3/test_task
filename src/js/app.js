import slider from "./modules/slider.js";
import menuBurger from "./modules/burger.js";

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Slider

  const width = window.innerWidth;
  
  if (width > 1024) {
    slider();
  }

  menuBurger();
});