export const popupAll=document.querySelectorAll('.popup');
export const popup = document.querySelector('.popup');
export const popupEditProfile = document.querySelector('.popup__edit-profile');
export const popupNewCard = document.querySelector('.popup__add-new-card');
export const editButton = document.querySelector('.profile-info__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const nameInput = popup.querySelector('.popup__input_name');
export const jobInput = popup.querySelector('.popup__input_job');
export const profileName = document.querySelector('.profile-info__title');
export const profileJob = document.querySelector('.profile-info__subtitle');
export const saveButton = popupEditProfile.querySelector('#button_save_edits');
export const template = document.querySelector('.template').content.querySelector(".elements__card");
export const elements = document.querySelector(".elements");
export const addCardButton = popupNewCard.querySelector(".popup__button");
export const popupFullImage = document.querySelector(".popup__full-img");
export const popupImage = popupFullImage.querySelector(".popup__image");
export const popupCaption = popupFullImage.querySelector(".popup__caption");
export const nameCardInput = popupNewCard.querySelector('.popup__input_name-card');
export const urlInput = popupNewCard.querySelector(".popup__input_url");
export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};