const galleryModal = () => {
  const galleryModal = document.querySelector('.gallery-modal');
  const galleryImgs = document.querySelectorAll('.gallery__swiper-slide img');
  const galleryModalImage = document.querySelector('.gallery-modal__wrapp img');
  const galleryModalSource = document.querySelector('.gallery-modal__wrapp source');

  const openGalleryModal = (src) => {
    galleryModal.classList.add('active');
    galleryModalImage.src = src;
    galleryModalSource.srcset = src;
    document.body.style.overflow = 'hidden';
  }

  const closeGalleryModal = (e) => {
    if (e.target && e.target.classList.contains('gallery-modal')) {
      e.target.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  galleryImgs.forEach((img) => {
    img.addEventListener('click', () => openGalleryModal(img.src));
  });

  galleryModal.addEventListener('click', (e) => {
    closeGalleryModal(e);
  });
}

export default galleryModal;