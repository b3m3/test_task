const menuPopup = () => {
  const bodyMenu = document.querySelector('.menu__body');
  const popup = document.querySelector('.menu-popup');

  const opentPopup = (e) => {
    if (e.target && e.target.classList.contains('menu-btn')) {
      popup.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  const closePopup = () => {
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
  }


  bodyMenu.addEventListener('click', (e) => {
    opentPopup(e)
  });

  popup.addEventListener('click', closePopup);
}

export default menuPopup;