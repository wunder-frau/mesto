let showPopupButton = document.querySelector('#show-popup');
let popup = document.querySelector('.popup');
let hidePopupButton = document.querySelector('#hide-popup');
let formElement = document.querySelector('.form');
let submitButton = document.querySelector('.form__submit');

const elementsList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('.element-template').content;

// let elements = document.querySelector('.elements');
// let elementLike = document.querySelector('.element__like');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (element) {
  const cardElement = elementTemplate.cloneNode(true);

  cardElement.querySelector('.element__title').textContent = element.name;
  cardElement.querySelector('.element__image').src = element.link;

  elementsList.append(cardElement)
})

function popupToggle() {
  document.querySelector('#input-name').value = document.querySelector('.profile__title').textContent;
  document.querySelector('#input-about').value = document.querySelector('.profile__subtitle').textContent;
  popup.classList.toggle('popup_opend');
}

function formSubmitHandler (event) {
  event.preventDefault();
  let inputName = document.querySelector('#input-name').value;
  let jobInput = document.querySelector('#input-about').value;

  document.querySelector('.profile__title').textContent = inputName;
  document.querySelector('.profile__subtitle').textContent = jobInput;
  popup.classList.remove('popup_opend');
}

showPopupButton.addEventListener('click', popupToggle);
hidePopupButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);


/* ----------------------------------------------------------------------------------------------------------------- */

// function likeButton() {
//   if (elementLike.classList.contains('element__like_active')) {
//     elementLike.classList.remove('element__like_active');
//   } else {
//     elementLike.classList.add('element__like_active');
//   }
// }
// elementLike.addEventListener('click', likeButton);
// console.log(elementLike);