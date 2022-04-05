// 피드 버튼들 동작 시 클래스 fa-solid 바꾸기 등

const likeButtons = document.body.getElementsByClassName("button-heart");
for (let likeButton of likeButtons) {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("liked");
    likeButton.querySelector("i").classList.toggle("fa-regular");
    likeButton.querySelector("i").classList.toggle("fa-solid");
  });
}

const bookmarkButtons = document.body.getElementsByClassName("button-bookmark");
for (let bookmarkButton of bookmarkButtons) {
  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmarked");
    bookmarkButton.querySelector("i").classList.toggle("fa-regular");
    bookmarkButton.querySelector("i").classList.toggle("fa-solid");
  });
}

// 댓글 한 글자 이상 작성해야 게시 버튼 활성화
const postCommentInputs =
  document.body.getElementsByClassName("post-comment-input");

for (let postCommentInput of postCommentInputs) {
  postCommentInput.addEventListener("keyup", () => {
    const postCommentButton = postCommentInput
      .closest("div")
      .querySelector(".post-comment-button");

    postCommentButton.disabled =
      postCommentInput.value.length >= 1 ? false : true;
  });
}

// 댓글 입력하고 enter 프레스 하면 댓글 달리게 하기

const postCommentButtons = document.body.getElementsByClassName(
  "post-comment-button"
);

const createCommentLi = (id, comment) => {
  const li = document.createElement("li");
  li.className = "post-comment-item";

  const userProfileLink = document.createElement("a");
  userProfileLink.href = "#";
  const userId = document.createElement("strong");
  userId.className = "user-id";
  userId.textContent = id;
  userProfileLink.appendChild(userId);

  const commentContent = document.createElement("span");
  commentContent.className = "post-comment-content";
  commentContent.textContent = comment;

  li.appendChild(userProfileLink);
  li.appendChild(commentContent);

  return li;
};

for (let postCommentButton of postCommentButtons) {
  const postCommentInput = postCommentButton
    .closest("div")
    .querySelector(".post-comment-input");

  const postCommentList = postCommentButton
    .closest("div")
    .closest("article")
    .querySelector(".post-comment-list");

  postCommentButton.addEventListener("click", () => {
    const newComment = createCommentLi("garuda352", postCommentInput.value);
    postCommentInput.value = "";
    postCommentButton.disabled = true;
    postCommentList.insertAdjacentElement("beforeend", newComment);
  });
}

for (let postCommentInput of postCommentInputs) {
  const postCommentButton = postCommentInput
    .closest("div")
    .querySelector(".post-comment-button");

  const postCommentList = postCommentInput
    .closest("div")
    .closest("article")
    .querySelector(".post-comment-list");

  postCommentInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      if (!postCommentInput.value.trim()) {
        return;
      }
      const newComment = createCommentLi("garuda352", postCommentInput.value);
      postCommentInput.value = "";
      postCommentButton.disabled = true;
      postCommentList.insertAdjacentElement("beforeend", newComment);
    }
  });
}
