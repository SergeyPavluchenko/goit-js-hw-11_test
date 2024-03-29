const gallary = document.querySelector('.gallery');

export function murkup(arr) {
  const arrImages = arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
                <div class="gallary_item">
                    <a class="gallery_link" href="${largeImageURL}">
                    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                    </a>
                </div>
            
                <div class="info">
                        <p class="info-item">
                        <b>Likes: ${likes}</b>
                        </p>
                        <p class="info-item">
                        <b>Views:${views}</b>
                        </p>
                        <p class="info-item">
                        <b>Comments: ${comments}</b>
                        </p>
                        <p class="info-item">
                        <b>Downloads: ${downloads}</b>
                        </p>
               </div>
                 </div>
            `;
      }
    )
    .join(' ');
  gallary.insertAdjacentHTML('beforeend', arrImages);
}
