import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const modalRef = document.querySelector("div.basicLightbox");

galleryRef.addEventListener("click", onClickImg);

function onClickImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const isActive = event.target.classList.add(".basicLightbox--visible");
  const open = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  open.show();
  window.addEventListener(`keydown`, onEscClose);

  if (!modalRef) {
    window.removeEventListener(`keydown`, onEscClose);
  }

  function onEscClose(event) {
    if (event.code === "Escape") {
      open.close();
      console.log(event);
      window.removeEventListener(`keydown`, onEscClose);
    }
  }
}

const newImgArray = ({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src = "${preview}"
      data-source="${original}"
      alt = "${description}"/>
  </a>
  </div>`;
};

const imageMarkup = galleryItems.map(newImgArray).join("");
galleryRef.insertAdjacentHTML("beforeend", imageMarkup);
