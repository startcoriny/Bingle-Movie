const card_list = document.querySelector('#card_list');
function readURLParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.getAll(name);
}

let baseImgUrl = 'https://image.tmdb.org/t/p/original'

const cardIds = readURLParameter('cardIds');

/**
 * cardIds 의 cardId 에 대해 로컬 스토리지에서 정보를 가져와, html 에 뿌리기
 */
if (cardIds.length > 0) {
    
    for (const cardId of cardIds) {

        const cardInfoString = window.localStorage.getItem(cardId);
        
        if (cardInfoString) {

            const cardInfo = JSON.parse(cardInfoString);

            const moviecardcontainer = document.createElement("div");
            moviecardcontainer.className = "moviecardcontainer";
            card_list.appendChild(moviecardcontainer);

            const div = document.createElement("div");
            div.className = "movie_card";
            div.id = cardId;
            div.style.width = '250px';
            div.style.padding = '20px';
            div.style.backgroundColor = 'rgb(233 69 69)';
            div.innerHTML = `<img src="${baseImgUrl}${cardInfo.poster_path}" alt="이미지없음"></img>`;
            moviecardcontainer.appendChild(div);

            const back = document.createElement("div");
            back.className = "back";
            back.style.width = '250px';
            back.style.padding = '10px';
            back.style.backgroundColor = 'rgb(91 2 2)';
            back.style.color = 'white';
            back.innerHTML = `<h1>${cardInfo.title}</h1>`;
            moviecardcontainer.appendChild(back);
        }
        window.localStorage.getItem.length
    }
}


document.querySelector('.movie-card-list').addEventListener('click', function (event) {
    const clickedCard = event.target.closest('.movie_card');

    if (clickedCard) {
        const cardId = clickedCard.id;
        window.location.href = `./html/feature/detailpage.html?cardId=${cardId}`;
    }
});