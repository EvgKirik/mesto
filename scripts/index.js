let popupClose = document.querySelector(".popup__close-profile");
let popupAddCardClose = document.querySelector(".popup__close-card");
let popupProfile = document.querySelector(".popup_profile");
let popupAddCard = document.querySelector(".popup_add-card");
let profileButtonEdit = document.querySelector(".profile__button_type_edit");
let formProfile = document.querySelector(".popup__form-profile");
let formAddCard = document.querySelector(".popup__form-add-card");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let addCardButton = document.querySelector(".profile__button_type_add");
let cardNameInput = document.querySelector(".popup__input_card_name");
let cardImageInput = document.querySelector(".popup__input_image_link");
let popupLightBox = document.querySelector(".popup_lightbox");
let popupImage = document.querySelector(".popup__image");
let popupText = document.querySelector(".popup__figcaption");
let popupImageClose = document.querySelector(".popup__close-image-card");
const likeButtons = document.querySelectorAll(".elements__like");
const deleteButtons = document.querySelectorAll(".elements__delete");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cardContainer = document.createElement("ul");
cardContainer.classList.add("elements__list");

function createCard(card) {
  const cardElement = document.createElement("li");
  cardElement.classList.add("elements__item");
  const cardImage = document.createElement("img");
  cardImage.classList.add("elements__image");
  const elementsCardDelete = document.createElement("button");
  elementsCardDelete.classList.add("elements__delete");
  const elementsCard = document.createElement("div");
  elementsCard.classList.add("elements__card");
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("elements__title");
  const elementsCardLike = document.createElement("button");
  elementsCardLike.classList.add("elements__like");

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;

  cardElement.appendChild(cardImage);
  cardElement.appendChild(elementsCardDelete);
  cardElement.appendChild(elementsCard);
  elementsCard.appendChild(cardTitle);
  elementsCard.appendChild(elementsCardLike);

  elementsCardLike.addEventListener("click", (event) => {
    event.target.classList.toggle("elements__like_active");
  });

  cardImage.addEventListener("click", (e) => {
    popupLightBox.classList.add("popup_opened");
    popupImage.src = e.target.src;
    popupText.textContent = cardTitle.textContent;
  });

  elementsCardDelete.addEventListener("click", (event) => {
    const parentElement = event.target.closest(".elements__item");
    parentElement.remove();
  });

  return cardElement;
}

function createCards(cards) {
  cards.forEach((card) => {
    cardContainer.appendChild(createCard(card));
  });
  return cardContainer;
}

const cardList = createCards(initialCards);
let sectionElements = document.querySelector(".elements");
sectionElements.appendChild(cardList);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  handlePopupClose();
}

function handleFormAddCardSubmit(evt) {
  evt.preventDefault();
  initialCards["name"] = cardNameInput.value;
  initialCards["link"] = cardImageInput.value;
  cardContainer.prepend(createCard(initialCards));
  handlePopupCardClose();
}

function handlePopupOpen() {
  popupProfile.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function handlePopupCardOpen() {
  popupAddCard.classList.add("popup_opened");
}

function handlePopupClose() {
  popupProfile.classList.remove("popup_opened");
}

function handlePopupCardClose() {
  popupAddCard.classList.remove("popup_opened");
  cardNameInput.value = "";
  cardImageInput.value = "";
}

function handlePopupLightBox() {
  popupLightBox.classList.toggle("popup_opened");
}

formProfile.addEventListener("submit", handleFormSubmit);
formAddCard.addEventListener("submit", handleFormAddCardSubmit);
popupClose.addEventListener("click", handlePopupClose);
popupAddCardClose.addEventListener("click", handlePopupCardClose);
popupImageClose.addEventListener("click", handlePopupLightBox);
profileButtonEdit.addEventListener("click", handlePopupOpen);
addCardButton.addEventListener("click", handlePopupCardOpen);
