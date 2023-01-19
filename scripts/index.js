let popupClose = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");
let profileButtonEdit = document.querySelector(".profile__button_type_edit");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  handlePopupToggle();
}
function handlePopupToggle() {
  nameInput.setAttribute("value", nameInput.value);
  jobInput.setAttribute("value", jobInput.value);
  popup.classList.toggle("popup_opened");
}
function handlePopupClose() {
  popup.classList.toggle("popup_opened");
  nameInput.value = nameInput.getAttribute("value");
  jobInput.value = jobInput.getAttribute("value");
  jobInput.setAttribute("value", jobInput.value);
}
formElement.addEventListener("submit", handleFormSubmit);
popupClose.addEventListener("click", handlePopupClose);
profileButtonEdit.addEventListener("click", handlePopupToggle);
