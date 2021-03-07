const popupProfile = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_add');

const elementsList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('.element-template').content;

/* ----------------------------------------------------------------------------------------------------------------- */

function popupToggle(popupElement) {
  popupElement.classList.toggle('popup_opend');
}

function popupClose(popupElement) {
  popupElement.classList.remove('popup_opend');
}

function cardLike(cardElement) {
  cardElement.querySelector('.element__like').addEventListener('click', function (event) {
    event.target.classList.toggle('element__like_active');
  }); 
}

/* ----------------------------------------------------------------------------------------------------------------- */

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
  cardElement.querySelector('.element__image').alt = element.name;

  cardLike(cardElement);

  elementsList.append(cardElement);
});

let editPopupButton = document.querySelector('#show-popup');
editPopupButton.addEventListener('click', function () {
  document.querySelector('#input-name_title');
  document.querySelector('#input-name').value = document.querySelector('.profile__title').textContent;
  document.querySelector('#input-about').value = document.querySelector('.profile__subtitle').textContent;
  popupToggle(popupProfile); // открываем попап редактирования
});

let addCardPopupButton = document.querySelector('.profile__add');
addCardPopupButton.addEventListener('click', function () {
  document.querySelector('#input-name_place');
  document.querySelector('#input-card').value;
  document.querySelector('#input-link').value;
  popupToggle(popupCard); // открываем попап добавления
});

let hideEditPopup = document.querySelector('.form__close_edit');
hideEditPopup.addEventListener('click', function () {
  popupClose(popupProfile);
});

let hideAddCardPopup = document.querySelector('.form__close_add');
hideAddCardPopup.addEventListener('click', function () {
  popupClose(popupCard);
});

let formProfile = document.querySelector('.form__profile');
formProfile.addEventListener('submit', function (event) {
  event.preventDefault();
  let inputName = document.querySelector('#input-name').value;
  let jobInput = document.querySelector('#input-about').value;

  document.querySelector('.profile__title').textContent = inputName;
  document.querySelector('.profile__subtitle').textContent = jobInput;

  popupClose(popupProfile);
});

let formCardAdd = document.querySelector('.form__card_add');
formCardAdd.addEventListener('submit', function (event) {
  event.preventDefault();
  let cardName = document.querySelector('.form__input_type_card-name').value;
  let link = document.querySelector('.form__input_type_card-link').value;

  const cardElement = elementTemplate.cloneNode(true);

  cardElement.querySelector('.element__title').textContent = cardName;
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__image').alt = cardName;

  cardLike(cardElement);
  elementsList.prepend(cardElement);

  popupClose(popupCard);
});

/* ----------------------------------------------------------------------------------------------------------------- */
