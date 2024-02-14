import slider from "./modules/slider.js";


document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const width = window.innerWidth;

  if (width > 1024) {
    slider();
  }
});