import { popupEditProfile, popupNewCard, editButton, addButton, settings, 
	updateButton, popupUpdateAvatar, popupDeleteCard, profileName, profileJob, profileAvatar, 
	nameInput, jobInput, addCardButton, updateAvatarButton } from './const.js';
import { editProfile, renderCard } from './cards.js';
import { openPopup, handleAddCard, handleUpdateAvatar, handleConfirmDeleteCard } from './modal.js';
import { enableValidation } from './validate.js';
import { getUserInfo, getCardsFromServer } from './api.js';
import './../pages/index.css';

//открыть попапы
editButton.addEventListener('click', function() {
	openPopup(popupEditProfile);
  profileName.value = nameInput.textContent;
  profileJob.value = jobInput.textContent;
});

addButton.addEventListener('click',function() {
	addCardButton.setAttribute("disabled", "");
  addCardButton.classList.add('popup__button_inactive');
  openPopup(popupNewCard);

});

updateButton.addEventListener('click', function() {
  updateAvatarButton.setAttribute("disabled", "");
  updateAvatarButton.classList.add('popup__button_inactive');
	openPopup(popupUpdateAvatar);
});

//Закрыть попапы и отправить инфу на сервер
popupEditProfile.addEventListener('submit', editProfile);
popupNewCard.addEventListener('submit', handleAddCard);
popupUpdateAvatar.addEventListener('submit', handleUpdateAvatar);
popupDeleteCard.addEventListener('submit', handleConfirmDeleteCard);

Promise.all([getUserInfo(), getCardsFromServer()])
  .then(([userData, cards]) => {
    profileName.id = userData._id;
    profileName.textContent = userData.name;
    profileJob.textContent = userData.about;
    profileAvatar.src = userData.avatar;
    nameInput.value = userData.name;
    jobInput.value = userData.about;
    cards.reverse().forEach(renderCard);
    enableValidation(settings);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  });



