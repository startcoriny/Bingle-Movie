/**댓글 수정 */
function updateComment(ele) {
  //가장 가까운 input 의 readony 없애기
  let updateInput = ele.closest('.comment-detail').querySelector('input[name="comment_input"]');
  updateInput.removeAttributes('readonly');

  //display flex 로 변경
}

/**사용자 정보 저장 */
function submitInformation() {
  document.getElementById('userInfo-modal').style.display = 'none';

  //로컬 스토리지에 저장
}