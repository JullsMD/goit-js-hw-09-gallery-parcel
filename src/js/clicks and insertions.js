export const galleryContainerRef = document.querySelector('.js-gallery');

export const insertionHtml = galleryContainerRef.insertAdjacentHTML('beforeend', createGalleryMarkup(gallery));
export const galleryClick = galleryContainerRef.addEventListener('click',onGalleryContainerClick);


