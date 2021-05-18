const modalImageRef = document.querySelector('.lightbox__image');
const modalRef = document.querySelector('.lightbox');
const lightboxOverlayRef = document.querySelector('.lightbox__overlay');

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
export function closeModal(){
    modalRef.classList.remove('is-open');
    modalImageRef.src = '';
    lightboxOverlayRef.removeEventListener('click',closeModal );
    window.removeEventListener('keydown', onEscapePress);
};

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
export function onEscapePress(evt) {

    if (evt.code === 'Escape') {
       closeModal(); 
    }
};