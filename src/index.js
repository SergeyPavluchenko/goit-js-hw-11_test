import { fetchApi } from './js/pixabay_Api';
import { murkup } from './js/murkup';
import { lightbox } from './js/lightBox';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const gallary = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.js-load-more');
const guard = document.querySelector('.js-guard');

let page = 1;
const perPage = 40;

form.addEventListener('submit', saerchImg);

function saerchImg(evt) {
  evt.preventDefault();
  gallary.innerHTML = '';
  const inputField = evt.currentTarget.elements[0].value;

  if (inputField === '') {
    Notify.failure('Enter your request');
    return;
  } else {
    fetchApi(inputField, perPage, page)
      .then(data => {
        const result = data.hits;
        console.log(result);
        const resultAllSearch = data.totalHits;

        if (result.length === 0) {
          Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        } else {
          Notify.info(`Hooray! We found ${resultAllSearch} images.`);
          murkup(result);
          lightbox.refresh();
          // observer.observe(guard);
          loadMoreBtn.hidden = false;
        }
      })
      .catch(error => console.error(error));
  }
  form.reset();
  // var options = {
  //   root: null,
  //   rootMargin: '300px',
  //   threshold: 1.0,
  // };
  // let observer = new IntersectionObserver(infinityScroll, options);

  // function infinityScroll(entries, observer) {
  //   page += 1;
  //   fetchApi(inputField, perPage, page)
  //     .then(data => {
  //       const result = data.hits;
  //       const numberPage = Math.ceil(data.totalHits / perPage);
  //       if (numberPage === page) {
  //         observer.unobserve(guard);
  //       }
  //       murkup(result);
  //     })
  //     .catch(error => console.log(error));
  // }

  loadMoreBtn.addEventListener('click', onLoad);

  function onLoad() {
    page += 1;
    fetchApi(inputField, perPage, page)
      .then(data => {
        const result = data.hits;
        const numberPage = Math.ceil(data.totalHits / perPage);
        console.log(numberPage);
        if (numberPage === page) {
          loadMoreBtn.hidden = true;
        }
        murkup(result);
      })
      .catch(error => console.log(error));
  }
}
