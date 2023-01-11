let popupClose = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");
let profileButtonEdit = document.querySelector(".profile__button_edit");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_name");
let jobInput = document.querySelector(".popup__input_job");
function handleFormSubmit(evt) {
  evt.preventDefault();
  let profileTitle = document.querySelector(".profile__title");
  let profileSubtitle = document.querySelector(".profile__subtitle");
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  handlePopupToggle();
}
function handlePopupToggle() {
  popup.classList.toggle("popup_opened");
}
formElement.addEventListener("submit", handleFormSubmit);
popupClose.addEventListener("click", handlePopupToggle);
profileButtonEdit.addEventListener("click", handlePopupToggle);
