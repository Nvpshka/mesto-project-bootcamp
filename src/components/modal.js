import { popupAll, popupImage, popupCaption, popupFullImage, popupDeleteCard, addCardButton, 
nameCardInput, urlInput, updateAvatarButton, profileAvatar, urlAvatar, deleteButton,  } from './const.js';
import { renderCard } from './cards.js';
import { updateAvatar, addCardOnServer, deleteCardFromServer } from './api.js';
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
};

function handleOpenImage (event){
	const card = event.target.closest('.elements__card');
	popupImage.src = event.target.src;
  popupImage.alt = event.target.alt;
	popupCaption.textContent = card.querySelector('.elements__name').textContent;
openPopup(popupFullImage);
	//popupFullImage.classList.add("popup_opened");
  document.addEventListener('keydown', handleEscape);
}

function closePopup() {
  const openedPopup = document.querySelector('.popup_opened');
  if (!openedPopup) return;
  openedPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
};

function handleEscape(evt) {
    if (evt.key === 'Escape') {
      closePopup();
    }
};

function openPopupDeleteCard(evt) {
  const element = evt.target.closest('.elements__card');
  openPopup(popupDeleteCard);
  popupDeleteCard.id = element.id;
}

function handleCloseCross(element){
  element.target.closest(".popup_opened").classList.remove('popup_opened');
};


popupAll.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('cross-button') ) {
          closePopup(popup)
      } 
  })
})

function renderLoading(isLoading, button, buttonText='Сохранить', loadingText='Сохранение...') {
  if (isLoading) {
    button.textContent = loadingText;
  } else {
    button.textContent = buttonText;
  }
}

function handleAddCard(evt) {
  renderLoading(true, addCardButton, 'Создать', 'Создание...');
  addCardOnServer({
    name: `${nameCardInput.value}`,
    link: `${urlInput.value}`
  })
    .then((res) => {
      renderCard(res)
      nameCardInput.value = '';
      urlInput.value ='';
      addCardButton.setAttribute("disabled", "");
      addCardButton.classList.add('popup__button_inactive');
      //event.target.reset();
      closePopup();
    })
}

function handleUpdateAvatar(evt) {
  renderLoading(true, updateAvatarButton);
  updateAvatar(urlAvatar.value)
    .then((res) => {
      profileAvatar.src = res.avatar
      urlAvatar.value = '';
      closePopup();
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
    .finally(() => {
      renderLoading(false, updateAvatarButton);
    })
}

function handleConfirmDeleteCard(evt) {
  renderLoading(true, deleteButton, 'Да', 'Удаление...');
  const cardDeleteId = popupDeleteCard.id;
  deleteCardFromServer(popupDeleteCard.id)
    .then((res) => {
      popupDeleteCard.id = '';
      document.getElementById(`${cardDeleteId}`).remove();
      closePopup();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      renderLoading(false, deleteButton, 'Да', 'Удаление...')
    })
}



export { closePopup, openPopup, handleCloseCross, handleOpenImage, renderLoading, handleAddCard,
 handleUpdateAvatar, handleConfirmDeleteCard, openPopupDeleteCard }
