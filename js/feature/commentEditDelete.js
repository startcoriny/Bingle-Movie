let params = new URLSearchParams(window.location.search);
let cardId = params.get('cardId');

let validatePasswordUpdateBtnClickHandler = null;
let closeModalUpdateBtnClickHandler = null;
let updateBtnBtnClickHandler = null;
let validatePasswordDeleteBtnClickHandler = null;
let closeModalDeleteBtnClickHandler = null;

/**
 * 수정 - 유효성 모달창 display block
*/
function updateValidationModal(updateBtnBtn, updateBtn) {

  document.getElementById('passwordModal-update').style.display = 'block';

  const commentIdx = updateBtnBtn.id;
  let data = JSON.parse(localStorage.getItem(cardId));

  //이전 이벤트 리스너 제거
  if (validatePasswordUpdateBtnClickHandler) {
    document.getElementById('passwordModal-update-btn').removeEventListener('click', validatePasswordUpdateBtnClickHandler);
  }

  validatePasswordUpdateBtnClickHandler = () => {
    const inputPassword = document.getElementById('passwordInput-update').value;

    if (inputPassword == null || inputPassword == "") {
      alert('비밀번호를 입력하세요');
    
    } else if (data.comment[commentIdx].password !== inputPassword) {
      alert('비밀번호가 유효하지 않습니다. 다시 입력하세요.');

    } else {
      document.getElementById('passwordModal-update').style.display = 'none';
      document.getElementById('passwordInput-update').value = '';
      pleaseUpdateComment(commentIdx, updateBtnBtn, updateBtn);
    }
  };

  document.getElementById('passwordModal-update-btn').addEventListener('click', validatePasswordUpdateBtnClickHandler);

  if (closeModalUpdateBtnClickHandler) {
    document.getElementById('closeModalBtn-update').removeEventListener('click', closeModalUpdateBtnClickHandler);
  }

  closeModalUpdateBtnClickHandler = () => {
    document.getElementById('passwordModal-update').style.display = 'none';
  };

  document.getElementById('closeModalBtn-update').addEventListener('click', closeModalUpdateBtnClickHandler);
};


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

  if (updateBtnBtnClickHandler) {
    updateBtnBtn.removeEventListener('click', updateBtnBtnClickHandler);
  }

  updateBtnBtnClickHandler = () => {
    if (closestInput.value) {
      const isConfirmed = confirm("리뷰를 수정하시겠습니까?");

      if (isConfirmed) {
        let data = JSON.parse(localStorage.getItem(cardId));
        
        data.comment[commentIdx].text = closestInput.value;
        localStorage.setItem(cardId, JSON.stringify(data));

        alert('리뷰가 수정되었습니다.');

        updateBtn.style.display = 'none';
        closestInput.readOnly = true;
      }
    }
  };
  updateBtnBtn.addEventListener('click', updateBtnBtnClickHandler);
}

/**
 * 삭제 - 유효성 모달창 display block
*/
function deleteValidationModal(updateBtnBtn) {

  document.getElementById('passwordModal-delete').style.display = 'block';

  const commentIdx = updateBtnBtn.id;
  let data = JSON.parse(localStorage.getItem(cardId));

  if (validatePasswordDeleteBtnClickHandler) {
    document.getElementById('passwordModal-delete-btn').removeEventListener('click', validatePasswordDeleteBtnClickHandler);
  }

  validatePasswordDeleteBtnClickHandler = (event) => {
    console.log(event.type);
    const inputPassword = document.getElementById('passwordInput-delete').value;

    if (inputPassword == null || inputPassword == "") {
      alert('비밀번호를 입력하세요');
    
    } else if (data.comment[commentIdx].password !== inputPassword) {
      alert('비밀번호가 유효하지 않습니다. 다시 입력하세요.');
    
    } else {
      document.getElementById('passwordModal-delete').style.display = 'none';
      document.getElementById('passwordInput-delete').value = '';
      pleaseDeleteComment(commentIdx);
    }
  };

  document.getElementById('passwordModal-delete-btn').addEventListener('click', validatePasswordDeleteBtnClickHandler);

  if (closeModalDeleteBtnClickHandler) {
    document.getElementById('closeModalBtn-delete').removeEventListener('click', closeModalDeleteBtnClickHandler);
  }

  closeModalDeleteBtnClickHandler = () => {
    document.getElementById('passwordModal-delete').style.display = 'none';
  };

  document.getElementById('closeModalBtn-delete').addEventListener('click', closeModalDeleteBtnClickHandler);
}


/**
 * 댓글 삭제
 */
function pleaseDeleteComment(commentIdx) {

  const isConfirmed = confirm("리뷰를 삭제하시겠습니까?");

  if (isConfirmed) {
      //comment 배열에서 클릭한 인덱스를 조회한 다음, text 를 input value 로 수정
      let data = JSON.parse(localStorage.getItem(cardId));
      
      //slice
      data.comment.splice(commentIdx, 1);
      localStorage.setItem(cardId, JSON.stringify(data));

      alert('리뷰가 삭제되었습니다.');
      location.reload();
  }
}