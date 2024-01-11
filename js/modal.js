
/**모달 창 열기/닫기 */
function openReviewModal() {
  document.getElementById('comment-modal').style.display = 'block';
}

function openValidationModal() {
  document.getElementById('comment-modal').style.display = 'none';
  document.getElementById('userInfo-modal').style.display = 'block';
}

function closeReviewModal() {
  document.getElementById('comment-modal').style.display = 'none';
}

function closeValidationModal() {
  document.getElementById('userInfo-modal').style.display = 'none';
}

/** 별점 */
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
