let inputUserInfo = {};
let inputUserInfos = [];

/**
 * 모달창에 입력한 사용자 정보 저장
 */
function submitInformation() {
  
  const name = document.querySelector("input[name='userInfo']").value;
  const text = document.querySelector("#comments_input").value;
  const password = document.querySelector("input[name='password']").value;
  const score = document.querySelector("#score").innerHTML;
  const star = document.querySelector(".rating_star").innerHTML;

  inputUserInfo = {
    name: name,
    text: text,
    password: password,
    score: score,
  };

  inputUserInfos.push(inputUserInfo);
  save();

  document.querySelector("input[name='userInfo']").value = "";
  document.querySelector("#comments_input").value = "";
  document.querySelector("input[name='password']").value = "";
  document.querySelector("#score").innerHTML = "";
  document.querySelector(".rating_star").innerHTML = "";

  document.getElementById("userInfo-modal").style.display = "none";

  // 페이지 새로고침
  location.reload();
}


function save() {
  const params = new URLSearchParams(window.location.search);
  const cardId = params.get('cardId');

  let existingData = localStorage.getItem(cardId);

  let dataArray = {};
  dataArray = JSON.parse(existingData);

  if (!("comment" in dataArray)) {
    dataArray.comment = inputUserInfos;
  } else {
    dataArray.comment.push(inputUserInfo);
  }
  localStorage.setItem(cardId, JSON.stringify(dataArray));
};


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
