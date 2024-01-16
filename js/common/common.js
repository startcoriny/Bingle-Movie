// 페이지 헤더 오류시 펼칠 문구
document.addEventListener('DOMContentLoaded', function() {

  const message = "페이지를 불러올 수 없습니다";

    fetch('/html/common/header.html')
      .then(response => {
        if (response.statusText.toLowerCase() == "ok") return response.text();
      })
      .then(data => {
        document.getElementById('header').innerHTML = data;
      })
      .catch(e => {
        document.getElementById('header').innerHTML = message;
      });
});