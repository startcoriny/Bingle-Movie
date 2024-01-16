/**
 * 쿼리 스트링에서 cardId 값 조회한 후, 로컬 스토리지에 해당 cardId 에 대한 정보 출력
 */
document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const cardId = params.get('cardId');

  let baseImgUrl = 'https://image.tmdb.org/t/p/original';

  const movieInfo = document.querySelector('.movie-info');
  const container = document.querySelector('.container');

  if (movieInfo) {

    const getCardInfo = window.localStorage.getItem(cardId);
    const cardInfo = JSON.parse(getCardInfo);

    if (cardInfo) {
    
      /**
       * 이미지
       */
      const image = document.createElement('img');
      image.src = `${baseImgUrl}${cardInfo.poster_path}`;
      image.alt = `${cardInfo.title}`;
      movieInfo.appendChild(image);

      /**
       * 영화 정보 div
       */
      const movieInfoDetail = document.createElement('div');
      movieInfoDetail.classList.add('movie-info-detail');
      movieInfo.appendChild(movieInfoDetail);

      /**
       * 타이틀
       */
      const movieTitle = document.createElement('h1');
      movieTitle.classList.add('movie-title');
      movieTitle.textContent = cardInfo.title;
      movieInfoDetail.appendChild(movieTitle);

      /**
       * 개봉 날짜
       */
      const movieReplace = document.createElement('p');
      movieReplace.classList.add('movie-release'); 

      const date = (cardInfo.release_date).split("-");

      movieReplace.textContent = `${date[0]}년 ${date[1]}월 ${date[2]}일`;
      movieInfoDetail.appendChild(movieReplace);

      /**
       * 평점
       */
      const movieScore = document.createElement('p');
      movieScore.classList.add('movie-score'); 
      movieScore.textContent = `평점 : ${cardInfo.vote_average}`;
      movieInfoDetail.appendChild(movieScore);

      /**
       * 스토리
       */
      const story = document.createElement('p');
      story.classList.add('story'); 
      story.textContent = cardInfo.overview;
      movieInfoDetail.appendChild(story);

      /**
       * 댓글 div
       */
      const comments = document.createElement('div');
      comments.classList.add('comments'); 
      comments.textContent = "댓글";
      movieInfoDetail.appendChild(comments);

      /**
       * 댓글 컨테이너 div
       */
      const commentsContainer = document.createElement('div');
      commentsContainer.setAttribute('id', 'comments-container');
      movieInfoDetail.appendChild(commentsContainer);

      if (!("comment" in cardInfo) || cardInfo.comment.length == 0) {
        const pleaseComment = document.createElement('div');
        pleaseComment.textContent = '리뷰를 남겨주세요!';
        commentsContainer.appendChild(pleaseComment);
      
      } else {
        const commentsArray = cardInfo.comment;

        for (let i = 0; i < commentsArray.length; i++) {

          const commentDetail = document.createElement('div');
          commentDetail.classList.add('comment-detail');
          commentsContainer.appendChild(commentDetail);

          const commentUser = document.createElement('div');
          commentUser.classList.add('comment-user');
          commentDetail.appendChild(commentUser);

          /**
           * 댓글 작성자 이름
           */
          const commentUserName = document.createElement('div');
          commentUserName.classList.add('comment-user-name');
          commentUserName.textContent = commentsArray[i].name;
          commentUser.appendChild(commentUserName);

          const commentUserEtc = document.createElement('div');
          commentUserEtc.classList.add('comment-user-etc');
          commentUser.appendChild(commentUserEtc);

          /**
           * 댓글 평점
           */
          const ratingDiv = document.createElement('div');
          ratingDiv.textContent = '★ ' + commentsArray[i].score;
          commentUserEtc.appendChild(ratingDiv);

          const updateDeleteDiv = document.createElement('div');
          updateDeleteDiv.classList.add('comment-update-delete');
          commentUserEtc.appendChild(updateDeleteDiv);

          /**
           * 수정 버튼
           */
          const commentUpdate = document.createElement('span');
          commentUpdate.classList.add('comment-update');
          commentUpdate.textContent = '수정';
      
          updateDeleteDiv.appendChild(commentUpdate);

          /**
           * 삭제 버튼
           */
          const commentDelete = document.createElement('span');
          commentDelete.classList.add('comment-delete');
          commentDelete.textContent = '삭제';
          
          updateDeleteDiv.appendChild(commentDelete);

          const commentContent = document.createElement('div');
          commentContent.classList.add('comment');
          commentDetail.appendChild(commentContent);

          /**
           * 댓글 내용
           */
          const commentInput = document.createElement('input');
          commentInput.name = "comment_input";
          commentInput.type = "text";
          commentInput.value = commentsArray[i].text;
          commentInput.readOnly = true;
          commentContent.appendChild(commentInput);

          const updateBtn = document.createElement('div');
          updateBtn.classList.add('update-btn', 'hidden');
          commentDetail.appendChild(updateBtn);

          const updateBtnBtn = document.createElement('span');
          updateBtnBtn.classList.add('update-btn-btn');
          updateBtnBtn.textContent = '저장';
          updateBtnBtn.setAttribute('id', i); //인텍스 저장
          updateBtn.appendChild(updateBtnBtn);

          /**
           * 수정 버튼 이벤트
           */
          commentUpdate.onclick = function() {
            updateValidationModal(updateBtnBtn, updateBtn); //자식, 부모
          };

          /**
           * 삭제 버튼 이벤트
           */
          commentDelete.onclick = function () {
            deleteValidationModal(updateBtnBtn);
          };

        }  //for문
      
      } //else 문

      /**
       * submission 버튼
       */
      const commentButtonDiv = document.createElement('div');
      commentButtonDiv.classList.add('comment-button');
      movieInfoDetail.appendChild(commentButtonDiv);

      const commentSubmitSpan = document.createElement('span');
      commentSubmitSpan.classList.add('comment-submit');
      commentSubmitSpan.textContent = 'Submission';
      commentSubmitSpan.onclick = function () {
        openReviewModal(); 
      };
      commentButtonDiv.appendChild(commentSubmitSpan);  
      

    } 
  } 
});

