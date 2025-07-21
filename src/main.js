// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from '../src/js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from '../src/js/render-functions';

const form = document.querySelector('.form');

const onFormSubmit = event => {
    event.preventDefault();
    clearGallery();
    const query = event.currentTarget.elements['search-text'].value.trim();
    if (query === '') {
        iziToast.info({
            message: 'Insert the search request.'
        })
        return;
    }
   
    showLoader();

  getImagesByQuery(query)
    .then(data => {
        if (data.hits.length === 0) {
            iziToast.info({
                message: `Sorry, there are no images matching your search query. Please try again!`,
            });
        } else {
            createGallery(data.hits);
        }
    })
    .catch(error => {
        iziToast.error({ message: `Error: ${error.message}` });
    })
    .finally(() => {
        hideLoader();
    });
};

form.addEventListener('submit', onFormSubmit);
