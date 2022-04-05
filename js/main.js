const likeButton = document.body.querySelector(".button-heart");
const bookmarkButton = document.body.querySelector(".button-bookmark");
const postCommentInput = document.body.querySelector(".post-comment-input");
const postCommentButton = document.body.querySelector(".post-comment-button");
const postCommentList = document.body.querySelector(".post-comment-list");

// 피드 버튼들 동작 시 클래스 fa-solid 바꾸기 등

const heartButtonToggle = likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("liked");
  likeButton.querySelector("i").classList.toggle("fa-regular");
  likeButton.querySelector("i").classList.toggle("fa-solid");
});

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmarked");
  bookmarkButton.querySelector("i").classList.toggle("fa-regular");
  bookmarkButton.querySelector("i").classList.toggle("fa-solid");
});

// 댓글 한 글자 이상 작성해야 게시 버튼 활성화
postCommentInput.addEventListener("keyup", () => {
  postCommentButton.disabled = postCommentInput.value.slice().trim()
    ? false
    : true;
});

// 댓글 입력하고 enter 프레스 하면 댓글 달리게 하기
const createCommentLi = (id, comment) => {
  const li = document.createElement("li");
  li.className = "post-comment-item";

  const postCommentItemLeft = document.createElement("div");
  postCommentItemLeft.className = "post-comment-item-left";

  const userProfileLink = document.createElement("a");
  userProfileLink.href = "#";
  const userId = document.createElement("strong");
  userId.className = "user-id";
  userId.textContent = id;
  userProfileLink.appendChild(userId);

  const commentContent = document.createElement("span");
  commentContent.className = "post-comment-content";
  commentContent.textContent = comment;

  postCommentItemLeft.appendChild(userProfileLink);
  postCommentItemLeft.appendChild(commentContent);

  const postCommentItemRight = document.createElement("div");
  postCommentItemRight.className = "post-comment-item-right";

  const heartButton = document.createElement("button");
  heartButton.className = "button-heart";
  const heartIcon = document.createElement("i");
  heartIcon.className = "fa-regular fa-heart";
  heartButton.appendChild(heartIcon);

  heartButton.addEventListener("click", () => {
    heartButton.classList.toggle("liked");
    heartButton.querySelector("i").classList.toggle("fa-regular");
    heartButton.querySelector("i").classList.toggle("fa-solid");
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "button-delete";
  const deleteStrong = document.createElement("strong");
  deleteStrong.textContent = "삭제";
  deleteButton.appendChild(deleteStrong);

  deleteButton.addEventListener("click", (e) => {
    e.target.closest("li").remove();
  });

  postCommentItemRight.appendChild(heartButton);
  postCommentItemRight.appendChild(deleteButton);

  li.appendChild(postCommentItemLeft);
  li.appendChild(postCommentItemRight);

  return li;
};

postCommentButton.addEventListener("click", () => {
  if (!postCommentInput.value.slice().trim()) {
    return;
  }

  const newComment = createCommentLi("garuda352", postCommentInput.value);
  postCommentInput.value = "";
  postCommentButton.disabled = true;
  postCommentList.appendChild(newComment);
});

postCommentInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    if (!postCommentInput.value.slice().trim()) {
      return;
    }
    const newComment = createCommentLi("garuda352", postCommentInput.value);
    postCommentInput.value = "";
    postCommentButton.disabled = true;
    postCommentList.appendChild(newComment);
  }
});
