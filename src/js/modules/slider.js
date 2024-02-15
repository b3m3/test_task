import Swiper, {Navigation} from 'swiper';

const slider = () => {
  const swiper = new Swiper('.swiper', {
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

export default slider;