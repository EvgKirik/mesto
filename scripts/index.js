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
    openPopup(popupLightbox);
    popupImage.src = link;
    popupImage.alt = name;
    popupText.textContent = name;
  });

  elementsList.prepend(card);
}

function createCards() {
  initialCards.forEach((card) => {
    createNewCard(card.name, card.link);
  });
}

const cardList = createCards(initialCards);

function openPopup(e) {
  e.classList.add("popup_opened");
}

function closePopup(e) {
  e.classList.remove("popup_opened");
  if (e.querySelector("form")) {
    e.querySelector("form").reset();
  }
}

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile);
}

function handleFormAddCardSubmit(evt) {
  evt.preventDefault();
  createNewCard(cardNameInput.value, cardImageInput.value);
  closePopup(popupAddCard);
}

profileButtonEdit.addEventListener("click", () => {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});
popupProfileClose.addEventListener("click", () => {
  closePopup(popupProfile);
});

addCardButton.addEventListener("click", () => {
  openPopup(popupAddCard);
});
popupAddCardClose.addEventListener("click", () => {
  closePopup(popupAddCard);
});

popupLightboxClose.addEventListener("click", () => {
  closePopup(popupLightbox);
});

formProfile.addEventListener("submit", handleFormProfileSubmit);
formAddCard.addEventListener("submit", handleFormAddCardSubmit);
