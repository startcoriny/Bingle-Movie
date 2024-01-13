const message = "페이지를 불러올 수 없습니다";

fetch('/html/common/footer.html')
  .then(response => {
    if (response.statusText.toLowerCase() == "ok") return response.text();
    else document.getElementById('footer').innerHTML = message;
  })
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(e => {
    document.getElementById('footer').innerHTML = message;
  });


  fetch('/html/common/header.html')
    .then(response => {
      if (response.statusText.toLowerCase() == "ok") return response.text();
      else document.getElementById('header').innerHTML = message;
    })
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(e => {
      document.getElementById('header').innerHTML = message;
    });