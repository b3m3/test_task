import Swiper, {Navigation, Pagination, Grid} from 'swiper';

export const sliderMenu = () => {
  const menuSwiper = new Swiper('.menu__swiper', {
    modules: [Navigation],
    loop: true,
    spaceBetween: 5,
    slidesPerView: 'auto',
    initialSlide: 2,
    navigation: {
      nextEl: '.swiper-button_next',
      prevEl: '.swiper-button_prev',
    },
  });

};

export const sliderGallery = () => {
  const gallerySwiper = new Swiper('.gallery__swiper', {
    modules: [Pagination],
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}