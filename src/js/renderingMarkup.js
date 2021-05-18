import gallery from './gallery-items';
import {galleryContainerRef} from './refs';

export function createGalleryMarkup(gallery){
    return gallery
        .map(({preview,original,description}) => {
            return `
        <li>
         <a
             class="gallery__link"
             href= "${original}"
             >
            <img class = "gallery__image"
            src = '${preview}'
            alt = '${description}'
            data-source="${original}"
            width = 392
            height = 240>
            </a>
        </li>
    `;
        })
        .join('');
};
export const insertionHtml = galleryContainerRef.insertAdjacentHTML('beforeend', createGalleryMarkup(gallery));