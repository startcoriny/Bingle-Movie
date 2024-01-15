const searchBtn = document.querySelector(".fa-magnifying-glass");
const searchInput = document.getElementById("search_input");

/** 페이지 로드 후 자동으로 인풋창이 선택되어 바로 검색이 가능 */
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search_input");

  if (searchInput) {
    searchInput.focus();
  }
});

searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
  let keyword = searchInput.value;

  if (keyword !== "" && keyword !== null) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));

      if (document.getElementById(key)) {
        if (value.title.toLowerCase().includes(keyword)) {
          document.getElementById(key).style.display = "block";
        } else {
          document.getElementById(key).style.display = "none";
        }
      }
    }
  } else {
    alert("입력 값이 없습니다.");
    window.location.reload(true);
  }
}

buttonId ==
  sortRatings.addEventListener("click", function () {
    header - detail.innerText("Movie Rating");
  });
