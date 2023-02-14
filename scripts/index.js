const popupProfileClose = document.querySelector(".popup__close-profile");
const popupAddCardClose = document.querySelector(".popup__close-card");
const popupProfile = document.querySelector(".popup_profile");
const popupAddCard = document.querySelector(".popup_add-card");
const profileButtonEdit = document.querySelector(".profile__button_type_edit");
const formProfile = document.querySelector(".popup__form-profile");
const formAddCard = document.querySelector(".popup__form-add-card");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const addCardButton = document.querySelector(".profile__button_type_add");
const cardNameInput = document.querySelector(".popup__input_card_name");
const cardImageInput = document.querySelector(".popup__input_image_link");
const popupLightbox = document.querySelector(".popup_lightbox");
const popupImage = document.querySelector(".popup__image");
const popupText = document.querySelector(".popup__figcaption");
const popupLightboxClose = document.querySelector(".popup__close-image-card");
const elementsList = document.querySelector(".elements__list");
const cardTemplate = document.querySelector("#card-template");

function createNewCard(name, link) {
  const card = cardTemplate.content.cloneNode(true);
  card.querySelector(".elements__title").textContent = name;
  card.querySelector(".elements__image").src = link;
  card.querySelector(".elements__image").alt = name;
  card.querySelector(".elements__delete").addEventListener("click", (event) => {
    event.target.closest(".elements__item").remove();
  });
  card.querySelector(".elements__like").addEventListener("click", (event) => {
    event.target.classList.toggle("elements__like_active");
  });

  card.querySelector(".elements__image").addEventListener("click", () => {
    openPopupElement(popupLightbox);
    popupImage.src = link;
    popupImage.alt = name;
    popupText.textContent = name;
  });

  elementsList.prepend(card);
}

function createCards() {
  initialCards.forEach((card) => {
    createNewCard(card.name, card.link);
  });openPopupElement
}

const cardList = createCards(initialCards);

function openPopupElement(element) {
  element.classList.add("popup_opened");
}

function closePopupElement(element) {
  element.classList.remove("popup_opened");
}

function openAddCardPopup() {
  openPopupElement(popupAddCard);
  formAddCard.reset();
}

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopupElement(popupProfile);
}

function handleFormAddCardSubmit(evt) {
  evt.preventDefault();
  createNewCard(cardNameInput.value, cardImageInput.value);
  closePopupElement(popupAddCard);
}

profileButtonEdit.addEventListener("click", () => {
  openPopupElement(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});
popupProfileClose.addEventListener("click", () => {
  closePopupElement(popupProfile);
});

addCardButton.addEventListener("click", openAddCardPopup);
popupAddCardClose.addEventListener("click", () => {
  closePopupElement(popupAddCard);
});
popupAddCardClose.addEventListener("click", () => {
  closePopupElement(popupAddCard);
});

popupLightboxClose.addEventListener("click", () => {
  closePopupElement(popupLightbox);
});

formProfile.addEventListener("submit", handleFormProfileSubmit);
formAddCard.addEventListener("submit", handleFormAddCardSubmit);
