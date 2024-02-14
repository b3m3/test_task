import Swiper, {Navigation} from 'swiper';
// import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';

const slider = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    loop: true,
    spaceBetween: 5,
    slidesPerView: 5,
    initialSlide: 2,
    navigation: {
      nextEl: '.swiper-button_next',
      prevEl: '.swiper-button_prev',
    },
  });
};

export default slider;