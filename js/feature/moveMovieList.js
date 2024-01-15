const maintitle_Container = document.querySelector("#maintitle_Container");

maintitle_Container.addEventListener("click", function (e) {
  const buttonId = e.target.id;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTEwZDdmNWYzMmRlMGQ1ZGJmYmZhYTQzYzU1MTlmMyIsInN1YiI6IjY1OTYzYTkxMGU2NGFmNDAxMThjMTkxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QB8-UFSN1x6St9D-218WxnUeZVQFaw9-h8zZXbF1pcM",
    },
  };

  const urls = [
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=ko-KR&page=3&sort_by=popularity.desc",
    "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=3",
  ];

  const fetchData = async (urls) => {
    const response = await fetch(urls, options);
    const data = await response.json();
    return data;
  };

  /**
   * 각 URL에 대해 fetchData 함수를 호출하고 결과를 기다림
   */
  const fetchPromises = urls.map((url) => fetchData(url));

  /**
   * 모든 Promise가 처리되도록 기다림
   */
  Promise.allSettled(fetchPromises)
    .then((results) => {
      let newMovies = [];
      let movies = [
        results[0]["value"]["results"],
        results[1]["value"]["results"],
      ];

      for (let i = 0; i < movies.length; i++) {
        for (let j = 0; j < movies[0].length; j++) {
          newMovies.push(movies[i][j]);
        }
      }

      let sortedMovies = sortMovie(newMovies, buttonId);
      makeCard(sortedMovies, buttonId);
    })
    .catch((error) => {
      console.error(error);
    });
});

function sortMovie(movies, buttonId) {
  if (buttonId == "sortRatings") {
    return movies.sort((a, b) => b["vote_average"] - a["vote_average"]);
  } else if (buttonId == "sortTitle") {
    return movies.sort((a, b) => a["title"].localeCompare(b["title"]));
  } else if (buttonId == "sortpopular") {
    return movies.sort((a, b) => b["popularity"] - a["popularity"]);
  } else if (buttonId == "sortComming") {
    return movies.sort((a, b) =>
      b["release_date"].localeCompare(a["release_date"])
    );
  }
}

/**
 * sortfunc의 return값 사용할 위치
 */
function makeCard(movies, buttonId) {
  const queryParams = new URLSearchParams();

  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    let movieInfo = {
      title: `${movie["title"]}`,
      overview: `${movie["overview"]}`,
      vote_average: `${movie["vote_average"]}`,
      poster_path: `${movie["poster_path"]}`,
      popularity: `${movie["popularity"]}`,
      release_date: `${movie["release_date"]}`,
    };

    let movieInfoString = JSON.stringify(movieInfo);

    window.localStorage.setItem(`${movie["id"]}`, movieInfoString);
    queryParams.append("cardIds", movie["id"]);
  }
  window.location.href = `../../index.html?${queryParams.toString()}&buttonid=${buttonId}`;
}
