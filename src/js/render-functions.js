// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
const loader = document.querySelector('.js-loader');
const loadMoreBtn = document.querySelector('.load-more-button');

export function createGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
    `
    <li class="gallery-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
      </a>
      <div class="info">
        <p>Likes: ${likes}</p>
        <p>Views: ${views}</p>
        <p>Comments: ${comments}</p>
        <p>Downloads: ${downloads}</p>
      </div>
    </li>
    `
    ).join('');
    galleryContainer.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}


export function clearGallery() {
    galleryContainer.innerHTML = "";
 }
export function showLoader() {
    loader.classList.remove('is-hidden');
 }
export function hideLoader() {
    loader.classList.add('is-hidden');
 }

export function showLoadMoreButton() {
    loadMoreBtn.classList.remove('is-hidden');
}
export function hideLoadMoreButton() {
    loadMoreBtn.classList.add('is-hidden');
}