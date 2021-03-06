let showPopupButton = document.querySelector('#show-popup');
let popup = document.querySelector('.popup');
let hidePopupButton = document.querySelector('#hide-popup');
let formElement = document.querySelector('.form');
let submitButton = document.querySelector('.form__submit');
const addButton = document.querySelector('.profile__add');
const popupAdd = document.querySelector('#popup-2');


const elementsList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('.element-template').content;

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

  elementsList.append(cardElement)
})

/* ----------------------------------------------------------------------------------------------------------------- */


function popupToggle() {
  popup.classList.toggle('popup_opend');
}

showPopupButton.addEventListener('click', function () {
  document.querySelector('#input-name').value = document.querySelector('.profile__title').textContent;
  document.querySelector('#input-about').value = document.querySelector('.profile__subtitle').textContent;
  popupToggle(showPopupButton); // открываем попап редактирования
});

addButton.addEventListener('click', function () {
  document.querySelector('#input-card').textContent;
  document.querySelector('#input-about').textContent;
  popupToggle(popupAdd); // открываем попап добавления
}); 


formElement.addEventListener('submit', function formSubmitHandler(event) {
  event.preventDefault();
  document.querySelector('.profile__title').textContent = document.querySelector('#input-name').value;
  document.querySelector('.profile__subtitle').textContent = document.querySelector('#input-about').value;
  popup.classList.remove('popup_opend');
});


hidePopupButton.addEventListener('click', function() {
  popupToggle(hidePopupButton);
});

/* ----------------------------------------------------------------------------------------------------------------- */
