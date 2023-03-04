import { popupEditProfile, popupNewCard, popupFullImage, editButton, addButton, settings } from './const.js';
import { editProfile, addCard, } from './cards.js';
import { closeDarkPopup, closePopup, handleCloseCross, handleCloseCrossDark, openPopup } from './modal.js';
import { enableValidation } from './validate.js';
import './../pages/index.css';

//работа кнопки сохранить у попапа редактирования профиля
popupEditProfile.addEventListener('submit', editProfile);

//работа кнопки сохранить у попапа добавления картинки
popupNewCard.addEventListener('submit', addCard);

//закрыть попап через оверлей


//закрыть попап через крестик
popupFullImage.querySelector(".cross-button").addEventListener("click", handleCloseCrossDark);
popupEditProfile.querySelector(".cross-button").addEventListener("click", handleCloseCross);
popupNewCard.querySelector(".cross-button").addEventListener("click", handleCloseCross);

//открыть попап редактирование профиля
editButton.addEventListener('click', function() {
	openPopup(popupEditProfile);
});

//Открыть попап добавления карточки
addButton.addEventListener('click',function() {
	openPopup(popupNewCard);
});
enableValidation(settings);