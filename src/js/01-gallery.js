// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);

const cardsMarkup = createGalleryItems(galleryItems);

function createGalleryItems (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `;
    }).join(``);
    };

galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);

new SimpleLightbox('.gallery a', {});
