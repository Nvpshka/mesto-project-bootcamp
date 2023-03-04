import { profileName, profileJob, urlInput, nameCardInput, template, elements, nameInput, 
	jobInput, popupEditProfile, popupNewCard } from './const.js';
import { closePopup, handleOpenImage } from './modal.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


//функция создания карточки на основании готового массива
const createCard = (initialCards) => {
  const card = template.cloneNode(true);
  card.querySelector(".elements__image").src = initialCards.link;
  card.querySelector(".elements__name").textContent = initialCards.name;
  card.querySelector(".trash-button").addEventListener("click", handleDeleteCard);
  card.querySelector(".elements__like").addEventListener("click",handleLikeCard);
  card.querySelector(".elements__image").addEventListener("click", handleOpenImage);

  return card;
};

//функция удаления карточки
const handleDeleteCard = (event) => {
  event.target.closest(".elements__card").remove();
};
//функция лайка 
const handleLikeCard = (event) => {
	event.target.closest('.elements__like').classList.toggle('elements__like_active')
};

//создание карточек
const renderCard = (data) => {
  elements.prepend(createCard(data));
};
//инициализация данных массива
initialCards.forEach((data) => {
	renderCard(data);
})

//Собрать введенные значения, отобразить на экране и закрыть попап редактирования профиля
function editProfile(evt) {
	profileName.textContent = nameInput.value;
	profileJob.textContent = jobInput.value;

	closePopup(popupEditProfile);
 };

//Собрать введенные значения, отобразить на экране и закрыть попап добавления картинки
function addCard(evt) {
   evt.preventDefault();
    const newCard = {name: nameCardInput.value, link: urlInput.value}
    renderCard(newCard);
    nameCardInput.value = '';
    urlInput.value = '';

  closePopup(popupNewCard);
}

export { editProfile, addCard }
