import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryContainer.addEventListener("click", onGalleryBigImgClick);

const markupGallary = createColorCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", markupGallary);

function createColorCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryBigImgClick(event) {
  const isGalleryImg = event.target.classList.contains("gallery__image");
  if (!isGalleryImg) {
    return;
  }

  event.preventDefault();

  // const imgLarge = event.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}">  
`
  );
  instance.show();
}

//console.log(galleryItems);
