document.querySelector('.comment-button').addEventListener('click', openModal);

function openModal() {
  document.getElementById('comment-modal').style.display = 'block';
}

function closeModel() {
  document.getElementById('comment-modal').style.display = 'none';
}

const rating_input = document.querySelector('.rating input');
const rating_star = document.querySelector('.rating_star');
const score = document.querySelector('#score');

rating_input.addEventListener('input', () => {
    rating_star.style.width = `${rating_input.value * 10}%`;

    let inputValue = rating_input.value;
    for (let i = 0; i <= 10; i++) {
        if (inputValue == i) {
            score.innerHTML = "";
            score.innerHTML = `${i * 0.5}`;
        }
    }
});