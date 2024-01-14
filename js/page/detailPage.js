/**
 * 쿼리 스트링에서 cardId 값 조회한 후, 로컬 스토리지에 해당 cardId 에 대한 정보 출력
 */
document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const cardId = params.get('cardId');

  let baseImgUrl = 'https://image.tmdb.org/t/p/original';

  const movieDetails = document.querySelector('.movie-info');

  if (movieDetails) {

    const cardInfoString = window.localStorage.getItem(cardId);
    
    if (cardInfoString) {
      const cardInfo = JSON.parse(cardInfoString);
      
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
