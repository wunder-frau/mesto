const popupProfile = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_add');

const elementsList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('.element-template').content;

/* ----------------------------------------------------------------------------------------------------------------- */

function setCardLikeHandler(event) {
  event.target.classList.toggle('element__like_active');
}

function setDeleteCardHandler(event) {
  event.target.closest('.element').remove();
}

function createCard(title, image) {
  const cardElement = elementTemplate.cloneNode(true);

  cardElement.querySelector('.element__title').textContent = title;
  cardElement.querySelector('.element__image').src = image;
  cardElement.querySelector('.element__image').alt = title;

  cardElement.querySelector('.element__like').addEventListener('click', setCardLikeHandler);
  cardElement.querySelector('.element__delete').addEventListener('click', setDeleteCardHandler);

  return cardElement;
}

function openPopup(popupElement) {
  popupElement.classList.toggle('popup_opend');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opend');
}

function createCardPopup(cardElement) {
  const popupImage = cardElement.querySelector('.popup_type_image');

  // Open
  cardElement.querySelector('.element__image').addEventListener('click', function (event) {
    event.preventDefault();
    popupImage.classList.toggle('popup_opend');
  });

  // Close
  cardElement.querySelector('.image-container__close').addEventListener('click', function () {
    popupImage.classList.remove('popup_opend');
  });

  // Pop-up content
  cardElement.querySelector('.image-container__title').textContent = cardElement.querySelector('.element__title').textContent;
  cardElement.querySelector('.image-container__image').src = cardElement.querySelector('.element__image').src;
  cardElement.querySelector('.image-container__image').alt = cardElement.querySelector('.element__image').alt;
}

/* ----------------------------------------------------------------------------------------------------------------- */


/* Добавление карточек */

initialCards.forEach(function (element) {
  const cardElement = createCard(element.name, element.link);

  createCardPopup(cardElement);
  elementsList.append(cardElement);
});

document.querySelector('.form_card_add').addEventListener('submit', function (event) {
  event.preventDefault();
  const cardName = document.querySelector('.form__input_type_card-name').value;
  const link = document.querySelector('.form__input_type_card-link').value;

  const cardElement = createCard(cardName, link);

  createCardPopup(cardElement);
  elementsList.prepend(cardElement);
  
  closePopup(popupCard);
});


/* Кнопки открытия попапов */

const formPopupEdit = document.querySelector('.profile__edit');
formPopupEdit.addEventListener('click', function () {
  document.querySelector('#input-name_title');
  document.querySelector('#input-name').value = document.querySelector('.profile__title').textContent;
  document.querySelector('#input-about').value = document.querySelector('.profile__subtitle').textContent;
  openPopup(popupProfile); // открываем попап редактирования
});

const formPopupAdd = document.querySelector('.profile__add');
formPopupAdd.addEventListener('click', function () {
  openPopup(popupCard); // открываем попап добавления
});


/* Кнопки закрытия попапов */

const formEditCloseBtn = document.querySelector('.form__close_edit');
formEditCloseBtn.addEventListener('click', function () {
  closePopup(popupProfile);
});

const formAddCloseBtn = document.querySelector('.form__close_add')
formAddCloseBtn.addEventListener('click', function () {
  closePopup(popupCard);
});


/* Кнопки редактировния профиля и добавления карточки */

const formAddOpenBtn = document.querySelector('.form_profile')
formAddOpenBtn.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputName = document.querySelector('#input-name').value;
  const jobInput = document.querySelector('#input-about').value;

  document.querySelector('.profile__title').textContent = inputName;
  document.querySelector('.profile__subtitle').textContent = jobInput;

  closePopup(popupProfile);
});

/* ----------------------------------------------------------------------------------------------------------------- */
