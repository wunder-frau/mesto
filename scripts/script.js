const popupProfile = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_add');

const elementsList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('.element-template').content;

/* ----------------------------------------------------------------------------------------------------------------- */

function togglePopup(popupElement) {
  popupElement.classList.toggle('popup_opend');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opend');
}

function setCardLike(cardElement) {
  cardElement.querySelector('.element__like').addEventListener('click', function (event) {
    event.target.classList.toggle('element__like_active');
  }); 
}

function deleteCard(cardElement) {
  const trashButton = cardElement.querySelector('.element__delete');
  trashButton.addEventListener('click', function () {
    trashButton.closest('.element').remove();
  });
}

function createCardPopup(cardElement) {
  const popupImage = cardElement.querySelector('.popup__image');

  // Open
  cardElement.querySelector('.element__image').addEventListener('click', function (event) {
    event.preventDefault();
    popupImage.classList.toggle('popup__image_opend');
  });

  // Close
  cardElement.querySelector('.image-container__close').addEventListener('click', function () {
    popupImage.classList.remove('popup__image_opend');
  });

  // Pop-up content
  cardElement.querySelector('.image-container__title').textContent = cardElement.querySelector('.element__title').textContent;
  cardElement.querySelector('.image-container__image').src = cardElement.querySelector('.element__image').src;
  cardElement.querySelector('.image-container__image').alt = cardElement.querySelector('.element__image').alt;
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

  setCardLike(cardElement);
  deleteCard(cardElement);
  createCardPopup(cardElement);
  elementsList.append(cardElement);
});


/* Кнопки открытия попапов */

document.querySelector('#show-popup').addEventListener('click', function () {
  document.querySelector('#input-name_title');
  document.querySelector('#input-name').value = document.querySelector('.profile__title').textContent;
  document.querySelector('#input-about').value = document.querySelector('.profile__subtitle').textContent;
  togglePopup(popupProfile); // открываем попап редактирования
});

document.querySelector('.profile__add').addEventListener('click', function () {
  document.querySelector('#input-name_place');
  document.querySelector('#input-card').value;
  document.querySelector('#input-link').value;
  togglePopup(popupCard); // открываем попап добавления
});


/* Кнопки закрытия попапов */

document.querySelector('.form__close_edit').addEventListener('click', function () {
  closePopup(popupProfile);
});

document.querySelector('.form__close_add').addEventListener('click', function () {
  closePopup(popupCard);
});


/* Кнопки редактировния профиля и добавления карточки */

document.querySelector('.form_profile').addEventListener('submit', function (event) {
  event.preventDefault();
  const inputName = document.querySelector('#input-name').value;
  const jobInput = document.querySelector('#input-about').value;

  document.querySelector('.profile__title').textContent = inputName;
  document.querySelector('.profile__subtitle').textContent = jobInput;

  closePopup(popupProfile);
});

document.querySelector('.form_card_add').addEventListener('submit', function (event) {
  event.preventDefault();
  const cardName = document.querySelector('.form__input_type_card-name').value;
  const link = document.querySelector('.form__input_type_card-link').value;

  const cardElement = elementTemplate.cloneNode(true);

  cardElement.querySelector('.element__title').textContent = cardName;
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__image').alt = cardName;

  setCardLike(cardElement);
  deleteCard(cardElement);
  createCardPopup(cardElement);
  elementsList.prepend(cardElement);

  closePopup(popupCard);
});

/* ----------------------------------------------------------------------------------------------------------------- */
