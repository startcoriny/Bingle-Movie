let params = new URLSearchParams(window.location.search);
let cardId = params.get('cardId');

/**
 * 수정/삭제 - 유효성 모달창 display block
*/
function checkValidationModal(updateBtnBtn, updateBtn) {

  document.getElementById('passwordModal').style.display = 'block';

  const commentIdx = updateBtnBtn.id;
  let data = JSON.parse(localStorage.getItem(cardId));

  document.getElementById('validatePasswordBtn').addEventListener('click', () => {
    const inputPassword = document.getElementById('passwordInput').value;

    if (data.comment[commentIdx].password == inputPassword) {

      document.getElementById('passwordModal').style.display = 'none';
      document.getElementById('passwordInput').value = '';

      pleaseUpdateComment(commentIdx, updateBtnBtn, updateBtn);
    } else {
      alert('이름이나 비밀번호가 다릅니다. 다시 입력하세요');
    }
  });

  document.getElementById('closeModalBtn').addEventListener('click', () => {
    console.log('아아아');
    document.getElementById('passwordModal').style.display = 'none';
  });
}


/**
 * 댓글 수정
 */
let closestInput;

function pleaseUpdateComment(commentIdx, updateBtnBtn, updateBtn) {

  //가장 가까운 input 의 readony 없애기
  closestInput = updateBtn.parentElement.children[1].children[0];
  closestInput.readOnly = false;
  closestInput.focus();

  //display flex 로 변경
  updateBtn.style.display = 'flex';

  updateBtnBtn.addEventListener('click', () => {
    
    if (closestInput.value) {
      const isConfirmed = confirm("리뷰를 수정하시겠습니까?");

      if (isConfirmed) {
          //comment 배열에서 클릭한 인덱스를 조회한 다음, text 를 input value 로 수정
          let data = JSON.parse(localStorage.getItem(cardId));
          
          data.comment[commentIdx].text = closestInput.value;
          localStorage.setItem(cardId, JSON.stringify(data));

          alert('리뷰가 수정되었습니다.');

          updateBtn.style.display = 'none';
          closestInput.readOnly = true;
      }
    }
  });
}


/**
 * 댓글 삭제
 */

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