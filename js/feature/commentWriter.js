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

  name = "";
  text = "";
  password = "";
  score = "";
  star = "";

  document.getElementById("userInfo-modal").style.display = "none";

  //새로고침 추가해야됨
}


function save() {
  let existingData = localStorage.getItem("667538");

  let dataArray = {};
  dataArray = JSON.parse(existingData);

  if (!("comment" in dataArray)) {
    dataArray.comment = inputUserInfos;
  } else {
    dataArray.comment.push(inputUserInfo);
  }
  localStorage.setItem("667538", JSON.stringify(dataArray));
};


