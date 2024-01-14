/**댓글 수정 */
function updateComment(ele) {
  //가장 가까운 input 의 readony 없애기
  let updateInput = ele
    .closest(".comment-detail")
    .querySelector('input[name="comment_input"]');
  updateInput.removeAttributes("readonly");

  //display flex 로 변경
}

// /**사용자 정보 저장 */
function submitInformation() {
  const inputUserInfo = {
    name: document.querySelector("input[name='userInfo']").value,
    text: document.querySelector("#comments_input").value,
    password: document.querySelector("input[name='password']").value,
    score: document.querySelector("#score").innerHTML,
    //<ex) ★ 2.5>
  };

  //로컬 스토리지에 저장
  inputUserInfos.push(inputUserInfo);
  addItem(inputUserInfo);
  save();

  input.value = ""; //인풋창 초기화

   //인풋창 초기화
   document.querySelector("input[name='userInfo']").value = "";
   document.querySelector("#comments_input").value = "";
   document.querySelector("input[name='password']").value = "";
   document.querySelector("#score").innerHTML = "";
   document.querySelector(".rating_star").innerHTML = "";
  //
  document.getElementById("userInfo-modal").style.display = "none";
}

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// const name = document.getElementById("userInfo_input").value;
// const text = document.getElementById("comments_input").value;
// const password = document.getElementById("comments_input").value;
// const score = document.getElementById("score_input").value; 필요성 모름

// 전체 아이템을 저장할 배열
let inputUserInfos = [];

//string 형태로 배열에 저장
const save = () => {
  localStorage.setItem("inputUserInfos", JSON.stringify(inputUserInfos));
};

/* 삭제버튼 기능 */

const delItem = () => {
  // 삭제 버튼이 들어가있는 부모요소를 타겟으로 삭제를 진행함.
  const target =
    event.target.parentElement.parentElement.parentElement.parentElement;

  inputUserInfos = inputUserInfos.filter(
    (inputUserInfo) => inputUserInfo.id !== parseInt(target.id)
  );
  save();

  target.remove();
};

/* 로컬스토리지에 있는 데이터 추가 */
const addItem = (inputUserInfo) => {
  if (inputUserInfo.text !== "") {
    // 요소 생기게 하는 부분
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");

    span.innerText = inputUserInfo.text;

    // 텍스트가 삭제 인 버튼을 만들고 클릭하면 delItem 이 실행
    button.innerText = "삭제";
    // 삭제버튼이 생길때 이벤트리스너 기능을 가지고 생김
    button.addEventListener("click", delItem);

    li.appendChild(button);
    li.appendChild(span);
    // ul.appendChild(li);
    li.name = inputUserInfo.name;
    li.text = inputUserInfo.text;
    li.score = inputUserInfo.score;
  }
};

// const handler = (event) => {
//   event.preventDefault();
//   // 폼이 제출될 때 (submit 이벤트 가 일어날때) 페이지 새로고침 되지 않도록 함

//   /* 저장될 유저의 정보 */ // <Q1. 저장할때 value 값을 어떻게 저장해야하나>
//   const inputUserInfo = {
//     name: document.querySelector("input[name='userInfo']"), //name 영화 Id 값이랑 안겹치게
//     text: document.querySelector("input[name='comment']"),
//     password: document.querySelector("input[name='password']"), //('input[name="password"]')
//     score: document.querySelector(".rating_star"), //id="score"??  <02. 별 모양은 따로 클래스가 설정된게 없는데 score 값을 출력할 때 앞에다가 '★' 추가해도 되나..? ex) ★ 2.5>
//   };

//   inputUserInfos.push(inputUserInfo);
//   addItem(inputUserInfo);
//   save();
//   input.value = ""; //인풋창 초기화
// };

/* 가져오기 */
// const init = () => {
//   const initInputUserInfo = JSON.parse(localStorage.getItem("inputUserInfos"));

//   if (initInputUserInfo) {
//     initInputUserInfo.forEach((inputUserInfo) => {
//       addItem(inputUserInfo);
//     });

//     inputUserInfos = initInputUserInfo;
//   }
// };

// init();
// form.addEventListener("submit", handler);

//class 을 불러올 때 document.querySelector('.userInfo_input')
//name 명으로 가져올 때 document.querySelector("input[name='userInfo']")
