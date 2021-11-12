import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');


const newImgArray = ({preview, original, description}) => {
  return `
  <li><a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src = "${preview}"
      alt = "${description}"/>
  </a></li>
  `;
}

const imageMarkup = galleryItems.map(newImgArray).join('');
galleryRef.insertAdjacentHTML('beforeend', imageMarkup);


const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});