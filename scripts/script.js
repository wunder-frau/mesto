const popupProfile = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');

const elementsList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('.element-template').content;

/* ----------------------------------------------------------------------------------------------------------------- */

/* Функции открытия и закрытия попапов */

function openPopup(popupElement) {
  popupElement.classList.toggle('popup_opend');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opend');
}

const containerImage = document.querySelector('.image-container__image');
const containerTitle = document.querySelector('.image-container__title');

function setPopupImageCardHandler(event) {
  const target = event.target;
  containerImage.src = target.src;
  containerTitle.textContent = target.closest('.element').textContent;
  containerImage.alt = target.alt;

  openPopup(popupImage);
};


/* Функционал добавления карточек */

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

function createPopupImageCard(cardElement) {
  const formPopupImage = cardElement.querySelector('.element__image');
  formPopupImage.addEventListener('click', setPopupImageCardHandler);
}

/* ----------------------------------------------------------------------------------------------------------------- */


/* Добавление карточек */

//- Добавление карточек из массива
initialCards.forEach((element) => {
  const cardElement = createCard(element.name, element.link);

  createPopupImageCard(cardElement);
  elementsList.append(cardElement);
});

//- Добавление карточек из формы
const formCardAdd = document.querySelector('.form_card_add');
formCardAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  const cardName = document.querySelector('.form__input_type_card-name').value;
  const link = document.querySelector('.form__input_type_card-link').value;

  const cardElement = createCard(cardName, link);
  createPopupImageCard(cardElement);
  elementsList.prepend(cardElement);
  document.querySelector('.form_card_add').reset();
  closePopup(popupCard);
});


/* Кнопки открытия попапов */

const formPopupEditBtn = document.querySelector('.profile__edit');
formPopupEditBtn.addEventListener('click', () => {
  document.querySelector('#input-name_title');
  document.querySelector('#input-name').value = document.querySelector('.profile__title').textContent;
  document.querySelector('#input-about').value = document.querySelector('.profile__subtitle').textContent;
  openPopup(popupProfile); // открываем попап редактирования
});

const formPopupAddBtn = document.querySelector('.profile__add');
formPopupAddBtn.addEventListener('click', () => {
  openPopup(popupCard); // открываем попап добавления
});

/* Кнопки закрытия попапов */

const formEditCloseBtn = document.querySelector('.form__close_edit');
formEditCloseBtn.addEventListener('click', () => {
  closePopup(popupProfile);
});

const formAddCloseBtn = document.querySelector('.form__close_add');
formAddCloseBtn.addEventListener('click', () => {
  closePopup(popupCard);
});

const formImageCloseBtn = document.querySelector('.image-container__close');
formImageCloseBtn.addEventListener('click', () => {
  popupImage.classList.remove('popup_opend');
});

/* Кнопки редактировния профиля и добавления карточки */

const formAddOpenBtn = document.querySelector('.form_profile')
formAddOpenBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputName = document.querySelector('#input-name').value;
  const jobInput = document.querySelector('#input-about').value;

  document.querySelector('.profile__title').textContent = inputName;
  document.querySelector('.profile__subtitle').textContent = jobInput;

  closePopup(popupProfile);
});

/* ----------------------------------------------------------------------------------------------------------------- */
