const modalImageRef = document.querySelector('.lightbox__image');
const modalRef = document.querySelector('.lightbox');
const lightboxOverlayRef = document.querySelector('.lightbox__overlay');

// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Реализация делегирования на галерее ul.js-gallery,  получение url большого изображения.
export function onGalleryContainerClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    
    modalImageRef.src = evt.target.dataset.source;
    modalImageRef.alt = evt.target.alt;

    modalRef.classList.add('is-open');
    lightboxOverlayRef.addEventListener('click',closeModal);
    window.addEventListener('keydown',  onEscapePress);

    const onCloseButton = closeButtonRef.addEventListener('click',closeModal);
};

