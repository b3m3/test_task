const galleryModal = () => {
  const galleryModal = document.querySelector('.gallery-modal');
  const galleryImgs = document.querySelectorAll('.gallery__swiper-slide img');
  const galleryModalImage = document.querySelector('.gallery-modal__wrapp img');

  const openGalleryModal = (src) => {
    galleryModal.classList.add('active');
    galleryModalImage.src = src;
  }

  const closeGalleryModal = () => {
    galleryModal.classList.remove('active');
  }

  galleryImgs.forEach((img) => {
    img.addEventListener('click', () => openGalleryModal(img.src));
  });

  galleryModal.addEventListener('click', closeGalleryModal);
}

export default galleryModal;