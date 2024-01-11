
/**모달 창 열기/닫기 */
document.querySelector('.comment-button').addEventListener('click', openModal);

function openModal() {
  document.getElementById('comment-modal').style.display = 'block';
}

function closeModal1() {
  document.getElementById('comment-modal').style.display = 'none';
}

function closeModal2() {
  document.getElementById('userInfo-modal').style.display = 'none';
}

function nextModal() {
  document.getElementById('comment-modal').style.display = 'none';
  document.getElementById('userInfo-modal').style.display = 'block';
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

/**사용자 정보 저장 */
function submitUserComment() {
  document.getElementById('userInfo-modal').style.display = 'none';

  //로컬 스토리지에 저장
}