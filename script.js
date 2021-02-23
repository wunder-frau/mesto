let showPopupButton = document.querySelector('#show-popup');
let popup = document.querySelector('.popup');
let hidePopupButton = document.querySelector('#hide-popup');
let formElement = document.querySelector('.form');
let submitButton = document.querySelector('.submit-button');

function popupToggle() {
  popup.classList.toggle('popup__opend');
}

function formSubmitHandler (event) {
  event.preventDefault();
  let inputName = document.querySelector('.popup__input_name').value;
  let jobInput = document.querySelector('.popup__input_bio').value;

  document.querySelector('.profile-info__title').innerHTML = inputName;
  document.querySelector('.profile-info__subtitle').innerHTML = jobInput;
  popup.classList.remove('popup__opend');
}

showPopupButton.addEventListener('click', popupToggle);
hidePopupButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);

