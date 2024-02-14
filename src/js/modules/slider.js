import Swiper, { Navigation } from 'swiper';

const slider = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 5,
    spaceBetween: 5,
    speed: 600,
    initialSlide: 1,
    navigation: {
      nextEl: '.swiper-button_next',
      prevEl: '.swiper-button_prev',
    },
  });
};

export default slider;