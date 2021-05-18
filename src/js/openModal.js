import {galleryContainerRef,modalImageRef, modalRef, closeButtonRef,lightboxOverlayRef} from './refs';
import {closeModal,onEscapePress} from './closeModal';


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
export const galleryClick = galleryContainerRef.addEventListener('click',onGalleryContainerClick);
