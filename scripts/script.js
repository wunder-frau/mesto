let showPopupButton = document.querySelector('#show-popup');
let popup = document.querySelector('.popup');
let hidePopupButton = document.querySelector('#hide-popup');
let formElement = document.querySelector('.form');
let submitButton = document.querySelector('.popup__submit');


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
