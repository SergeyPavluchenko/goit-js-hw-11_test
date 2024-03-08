import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export let lightbox = new SimpleLightbox('.gallary_Item a', {
  captionDelay: 250,
  captionsData: 'alt',
});
