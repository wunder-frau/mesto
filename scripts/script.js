let editPopupButton = document.querySelector('#show-popup'); // open1
let addCardPopupButton = document.querySelector('.profile__add'); //open2

let hideEditPopup = document.querySelector('.form__close_edit'); // close1
let hideAddCardPopup = document.querySelector('.form__close_add'); // close2

let formElement = document.querySelector('.form');
let submitButton = document.querySelector('.form__submit');

let submitEditButton = document.querySelector('.form__submit_edit');
let submitAddButton = document.querySelector('.form__submit_add');

const popupProfile = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_add');

const elementsList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('.element-template').content;
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

/* ----------------------------------------------------------------------------------------------------------------- */

function popupToggle(popupElement) {
  popupElement.classList.toggle('popup_opend');
}

function popupClose(popupElement) {
  popupElement.classList.remove('popup_opend');
}

function formSubmitHandler(event) {
  event.preventDefault();
  let inputName = document.querySelector('#input-name').value;
  let jobInput = document.querySelector('#input-about').value;

  document.querySelector('.profile__title').textContent = inputName;
  document.querySelector('.profile__subtitle').textContent = jobInput;
}

/* ----------------------------------------------------------------------------------------------------------------- */

initialCards.forEach(function (element) {
  const cardElement = elementTemplate.cloneNode(true);

  cardElement.querySelector('.element__title').textContent = element.name;
  cardElement.querySelector('.element__image').src = element.link;

  elementsList.append(cardElement)
});


editPopupButton.addEventListener('click', function () {
  document.querySelector('#input-name_title');
  document.querySelector('#input-name').value = document.querySelector('.profile__title').textContent;
  document.querySelector('#input-about').value = document.querySelector('.profile__subtitle').textContent;
  popupToggle(popupProfile); // открываем попап редактирования
});

addCardPopupButton.addEventListener('click', function () {
  document.querySelector('#input-name_place');
  document.querySelector('#input-card').value;
  document.querySelector('#input-link').value;
  popupToggle(popupCard); // открываем попап добавления
});

hideEditPopup.addEventListener('click', function () {
  popupClose(popupProfile);
});

hideAddCardPopup.addEventListener('click', function () {
  popupClose(popupCard);
});

addEventListener('submit', function (event) {
  formSubmitHandler(event);
  popupClose(popupProfile);
});

/* ----------------------------------------------------------------------------------------------------------------- */
