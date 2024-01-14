const searchBtn = document.querySelector('.fa-magnifying-glass');
const searchInput = document.getElementById('search_input');

searchBtn.addEventListener('click', performSearch);

searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    performSearch();
  }
});

function performSearch() {
  let keyword = searchInput.value;

  if (keyword !== "" || keyword !== null) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));

      if (document.getElementById(key)) {
        if (value.title.toLowerCase().includes(keyword)) {
          document.getElementById(key).style.display = 'block';
        } else {
          document.getElementById(key).style.display = 'none';
        }
      }
    }
  }
}
