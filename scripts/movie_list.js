// // const config = require("../config");
// // const { API_KEY } = config;


// const card_list = document.querySelector('#card_list');




// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTEwZDdmNWYzMmRlMGQ1ZGJmYmZhYTQzYzU1MTlmMyIsInN1YiI6IjY1OTYzYTkxMGU2NGFmNDAxMThjMTkxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QB8-UFSN1x6St9D-218WxnUeZVQFaw9-h8zZXbF1pcM'
//     }
// };

// const urls = [
//     'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=ko-KR&page=3&sort_by=popularity.desc',
//     'https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=3'
// ];

// const fetchData = async (urls) => {
//     const response = await fetch(urls, options);
//     const data = await response.json();
//     // console.log(data)
//     return data;
// };

// // 각 URL에 대해 fetchData 함수를 호출하고 결과를 기다림
// const fetchPromises = urls.map(url => fetchData(url));

// // 모든 Promise가 처리되도록 기다림
// Promise.allSettled(fetchPromises)
//     .then(results => {
        
//         //필요한거 : title, overview vote_average,poster_path
        
//         let obj = [results[0]['value']['results'], results[1]['value']['results']]
//         for (let i = 0; i < obj.length; i++) {
            
//             let movieCards = obj[i].map(movie => {
//                 let baseImgUrl = 'https://image.tmdb.org/t/p/original'

//                 let movieInfo = {
//                     title: `${movie['title']}`,
//                     overview: `${movie['overview']}`,
//                     vote_average: `${movie['vote_average']}`
//                 }

//                 let movieInfoString = JSON.stringify(movieInfo)

//                 window.localStorage.setItem(`${movie['id']}`,movieInfoString)
//                 // console.log(movie['id'])

//                 const div = document.createElement("div");
//                 div.className = "movie_card";
//                 div.id = movie['id'];
//                 div.style.width = '250px';
//                 div.style.padding = '20px';
//                 div.style.backgroundColor = 'rgb(233 69 69)';
//                 div.innerHTML = `
//                     <img src="${baseImgUrl}${movie['poster_path']}" alt="이미지없음"></img>
//                 `;
//                 // <h4 class="title">${movie['title']}</h4>
//                 // <p>${movie['overview']}</p>
//                 // <p style="color: deeppink;">영화 평점 :${movie['vote_average']}</p>
//                 return div;
//             });

//             // 저장한 카드 forEach를 사용하여 div를 container에 내보내기
//             movieCards.forEach(div => card_list.append(div));
//         }
//     })
//     .catch(error => {
//         console.error(error);
//     });

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