const searchBtn = document.querySelector('.fa-magnifying-glass');

searchBtn.addEventListener('click', function() {
  const keyword = document.getElementById('search_input').value;

  if (keyword != "" || keyword != null) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));

      if (value.title.toLowerCase().includes(keyword)) {
        document.getElementById(key).style.display = 'block';
      } else {
        document.getElementById(key).style.display = 'none';
      }
    }
  }
});
