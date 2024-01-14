const card_list = document.querySelector('#card_list');
function readURLParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.getAll(name);
}

let baseImgUrl = 'https://image.tmdb.org/t/p/original'
// 예시: 특정 카드 ID에 대한 정보 읽기
const cardIds = readURLParameter('cardIds');
if (cardIds.length > 0) {
    // cardIds 배열에 각 카드의 ID가 들어 있습니다.
    for (const cardId of cardIds) {
        // 여기에서 필요한 작업 수행
        const cardInfoString = window.localStorage.getItem(cardId);
        if (cardInfoString) {
            const cardInfo = JSON.parse(cardInfoString);
            //console.log('카드 ID:', cardId, '카드 정보:', cardInfo);

            // 필요한 작업 수행
            const div = document.createElement("div");
            div.className = "movie_card";
            div.id = cardId;
            div.style.width = '250px';
            div.style.padding = '20px';
            div.style.backgroundColor = 'rgb(233 69 69)';
            div.innerHTML = `<img src="${baseImgUrl}${cardInfo.poster_path}" alt="이미지없음"></img>`;
            card_list.appendChild(div);
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