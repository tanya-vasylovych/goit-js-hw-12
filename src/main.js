// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from '../src/js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from '../src/js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-button');
let currentPage = 1;
let currentQuery = '';
hideLoadMoreButton();
let totalPages = 0;
const onFormSubmit = async event => {
   
    event.preventDefault();
    clearGallery();
    hideLoadMoreButton();

    const query = event.currentTarget.elements['search-text'].value.trim();
    if (query === '') {
        iziToast.info({
            message: 'Insert the search request.'
        })
        return;
    }

    currentQuery = query;
    currentPage = 1;
    try {
        showLoader();

        const data = await getImagesByQuery(currentQuery, currentPage);
        totalPages = Math.ceil(data.totalHits / 15);
    
        if (data.hits.length === 0) {
            iziToast.info({
                message: `Sorry, there are no images matching your search query. Please try again!`,
            });
            hideLoadMoreButton();
            return;
        }
    
        createGallery(data.hits);
        if (currentPage < totalPages) {
 
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
        }
    
    } catch (err) {
        iziToast.error({ message: `Error: ${err.message}` });
    } finally {
        hideLoader();
    }
};

const onLoadMoreBtnClick = async () => {
    currentPage += 1; 
    showLoader();
    try {
        const data = await getImagesByQuery(currentQuery, currentPage);
        createGallery(data.hits);
        const galleryItem = document.querySelector('.gallery-item');
        if (galleryItem) {
            const { height } = galleryItem.getBoundingClientRect();
            window.scrollBy({
                top: height * 2,
                behavior: "smooth",
            });
        }

        if (currentPage >= totalPages) {
            hideLoadMoreButton();
             return iziToast.info({
        message: "We're sorry, but you've reached the end of search results."
    });
        } else {
            showLoadMoreButton();
        }
    } catch (err) {
       iziToast.error({ message: `Error: ${err.message}` });
    } finally {
        hideLoader();
    }
};


form.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);