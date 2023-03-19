export const popupAll=document.querySelectorAll('.popup');
export const popup = document.querySelector('.popup');
export const popupEditProfile = document.querySelector('.popup__edit-profile');
export const popupNewCard = document.querySelector('.popup__add-new-card');
export const editButton = document.querySelector('.profile-info__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const nameInput = popupEditProfile.querySelector('.popup__input_name');
export const jobInput = popupEditProfile.querySelector('.popup__input_job');
export const profileName = document.querySelector('.profile-info__title');
export const profileJob = document.querySelector('.profile-info__subtitle');
export const saveButton = popupEditProfile.querySelector('#button_save_edits');
export const template = document.querySelector('#template').content.querySelector(".elements__card");
export const elements = document.querySelector(".elements");
export const addCardButton = popupNewCard.querySelector(".popup__button");
export const popupFullImage = document.querySelector(".popup__full-img");
export const popupImage = popupFullImage.querySelector(".popup__image");
export const popupCaption = popupFullImage.querySelector(".popup__caption");
export const nameCardInput = popupNewCard.querySelector('.popup__input_name-card');
export const urlInput = popupNewCard.querySelector(".popup__input_url");
export const updateButton = document.querySelector('.profile__avatar-edit');
export const popupUpdateAvatar = document.querySelector('.popup__update-avatar');
export const updateAvatarButton = popupUpdateAvatar.querySelector('.popup__button');
export const urlAvatar = popupUpdateAvatar.querySelector('.popup__input_url_avatar');
export const profileAvatar = document.querySelector('.profile__avatar');
export const popupDeleteCard = document.querySelector('.popup__delete-card');
export const deleteButton = popupDeleteCard.querySelector('.popup__button');
export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};
export const config = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-4',
  headers: {
    authorization: '26379aca-c675-4104-ac0b-1f092a81ff39',
    'Content-Type': 'application/json'
  }
}