document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const cardId = params.get('cardId');
  console.log(cardId);

  let baseImgUrl = 'https://image.tmdb.org/t/p/original';

  const movieDetails = document.querySelector('.movie-info');

  if (movieDetails) {

    const cardInfoString = window.localStorage.getItem(cardId);
    if (cardInfoString) {
      const cardInfo = JSON.parse(cardInfoString);
      console.log('카드 ID:', cardId, '카드 정보:', cardInfo);

      movieDetails.innerHTML = `
          <img src="${baseImgUrl}${cardInfo.poster_path}" alt="${cardInfo.title}">
          <div class="movie-info-detail">
              <h1 class="movie-title">${cardInfo.title}</h1>
              <p class="movie-release">${cardInfo.release_date}</p>
              <p class="movie-score">평점 : ${cardInfo.vote_average}</p>
              <p class="story">${cardInfo.overview}</p>

              <div class="comments">댓글</div>
          </div>`;

    } 
  } 
});
