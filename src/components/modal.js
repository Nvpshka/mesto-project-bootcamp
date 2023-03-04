import { popupAll, popup, editButton, addbutton, popupImage, popupCaption, popupFullImage, popupEditProfile, 
	popupNewCard } from './const.js';

//открыть попап обычный
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
};

//открыть попап с картинкой
function handleOpenImage (event){
	const card = event.target.closest('.elements__card');
	popupImage.src = event.target.src;
	popupCaption.textContent = card.querySelector('.elements__name').textContent;

	popupFullImage.classList.add("popup_opened_dark");
  popup.addEventListener('click', closeDarkPopup);
  document.addEventListener('keydown', handleEscapeDark);
}

//Закрыть попап обычный
function closePopup() {
  const openedPopup = document.querySelector('.popup_opened');
  if (!openedPopup) return;
  openedPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
};

//закрыть через esc
function handleEscape(evt) {
    if (evt.key === 'Escape') {
      closePopup();
    }
};

//Закрыть попап через крестик
function handleCloseCross(element){
  element.target.closest(".popup_opened").classList.remove('popup_opened');
};

 //закрыть попап с картинкой
function closeDarkPopup () {
  const openedPopupDark = document.querySelector('.popup_opened_dark');
  if (!openedPopupDark) return;
  openedPopupDark.classList.remove('popup_opened_dark');
  document.removeEventListener('keydown', handleEscapeDark);
};

//закрыть попап с картинкой через esc
function handleEscapeDark(evt) {
    if (evt.key === 'Escape') {
      closeDarkPopup();
    }
};

//закрыть попап с картинкой через крестик
function handleCloseCrossDark(element){
  element.target.closest(".popup_opened_dark").classList.remove('popup_opened_dark');
};


popupAll.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') ) {
          closePopup(popup)
      } else {
        if (evt.target.classList.contains('popup_opened_dark')) {
          closeDarkPopup()
        }
      }
  })
})

export { closePopup, closeDarkPopup, openPopup, handleCloseCross, 
	handleCloseCrossDark, handleOpenImage }
