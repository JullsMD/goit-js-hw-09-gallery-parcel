import {modalImageRef, modalRef,lightboxOverlayRef} from './refs';

export function closeModal(){
    modalRef.classList.remove('is-open');
    modalImageRef.src = '';
    lightboxOverlayRef.removeEventListener('click',closeModal );
    window.removeEventListener('keydown', onEscapePress);
};

export function onEscapePress(evt) {

    if (evt.code === 'Escape') {
       closeModal(); 
    }
};

