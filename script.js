let elementLike = document.querySelector('.element__like');
let elementLikeActive = document.querySelector('.element__like_active');
let noLikeActive = document.querySelector('.element__like_active-hidden')
console.log(noLikeActive);

function likeButton() {
  elementLike.classList.remove('.element__like');
  elementLike.classList.add('element__like_active');
}

elementLike.addEventListener('click', likeButton);

console.log(elementLike);
console.log(elementLikeActive);
