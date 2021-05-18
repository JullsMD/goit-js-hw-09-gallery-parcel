

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source
//  на элементе img, и указываться в href ссылки
//  (это необходимо для доступности).

export function createGalleryMarkup(gallery) {
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
