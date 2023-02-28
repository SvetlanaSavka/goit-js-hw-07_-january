import { galleryItems } from "./gallery-items.js";

// Change code below this line

const paletteContainer = document.querySelector(".gallery");
const cardMarkup = createColorCards(galleryItems);

paletteContainer.insertAdjacentHTML("afterbegin", cardMarkup);

function createColorCards(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img class="gallery__image"
     src="${preview}"
      alt="${description}" />
  </a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  docClose: true,
});

console.log(galleryItems);
