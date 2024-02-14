const menuBurger = () => {
  const menuLinks = document.querySelectorAll('.header__navbar_link');
  const menu = document.querySelector('.header__navbar');
  const burgerBtn = document.querySelector('.menu-hamburger');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');

    if (burgerBtn.classList.contains('active')) {
      menu.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  })

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      burgerBtn.classList.remove('active');
      menu.classList.remove('active');
      document.body.style.overflow = 'auto';
    })
  });
};

export default menuBurger;