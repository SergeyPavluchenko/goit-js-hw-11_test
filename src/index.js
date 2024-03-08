import { fetchApi } from './js/pixabay_Api';
import { murkup } from './js/murkup';
import { lightbox } from './js/lightBox';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const gallary = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.js-load-more');

const perPage = 40;

form.addEventListener('submit', saerchImg);

function saerchImg(evt) {
  evt.preventDefault();
  gallary.innerHTML = '';
  const inputField = evt.currentTarget.elements[0].value;

  fetchApi(inputField, perPage)
    .then(data => {
      const result = data.hits;
      const resultAllSearch = data.totalHits;

      if (inputField === '') {
        Notify.failure('Enter your request');
        return;
      }

      if (result.length === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      } else {
        Notify.info(`Hooray! We found ${resultAllSearch} images.`);
        murkup(result);
        lightbox.refresh();
        form.reset();
      }
    })
    .catch(error => console.log(error));
}
