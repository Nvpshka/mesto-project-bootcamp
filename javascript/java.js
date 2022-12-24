const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup__edit-profile');
const editButton = document.querySelector('.profile-info__edit-button');
const popupNewCard = document.querySelector('.popup__add-new-card');
const addButton = document.querySelector('.profile__add-button');
const nameInput = popup.querySelector('.popup__input_name');
const jobInput = popup.querySelector('.popup__input_job');
const profileName = document.querySelector('.profile-info__title');
const profileJob = document.querySelector('.profile-info__subtitle');
const saveButton = popupEditProfile.querySelector('#button_save_edits');

//открыть попап редактирование профиля
editButton.addEventListener('click', 
	function (evt) {
		popupEditProfile.classList.add('popup_opened')
	});
//Открыть попап доьавления карточки
addButton.addEventListener('click',
	function(evt) {
		popupNewCard.classList.add('popup_opened')
	})
//Закрыть попап через крестик
function сlosePopup(element){
  element.target.closest(".popup_opened").classList.remove('popup_opened');
};
popupEditProfile.querySelector(".cross-button").addEventListener("click", сlosePopup);
popupNewCard.querySelector(".cross-button").addEventListener("click", сlosePopup);

//Собрать введенные значения, отобразить на экране и закрыть попап редактирования профиля
function editProfile(evt) {
	evt.preventDefault();

	profileName.textContent = nameInput.value;
	profileJob.textContent = jobInput.value;
	popupEditProfile.classList.remove('popup_opened') 
 }
saveButton.addEventListener('click', editProfile);

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
const template = document.querySelector('.template').content.querySelector(".elements__card");
const elements = document.querySelector(".elements");
const addCardButton = popupNewCard.querySelector(".popup__button");

const createCard = (data) => {
  const card = template.cloneNode(true);
  card.querySelector(".elements__image").src = data.link;
  card.querySelector(".elements__name").textContent = data.name;
  card.querySelector(".trash-button").addEventListener("click", handleDeleteCard);
  card.querySelector(".elements__like").addEventListener("click",handleLikeCard);

  return card;
};
const handleDeleteCard = (event) => {
  event.target.closest(".elements__card").remove();
};
const handleLikeCard = (event) => {
	event.target.closest('.elements__like').classList.toggle('elements__like_active')
}
const renderCard = (data) => {
  elements.prepend(createCard(data));
};

initialCards.forEach((data) => {
	renderCard(data);
})
const nameCardInput = popupNewCard.querySelector('.popup__input_name-card');
const urlInput = popupNewCard.querySelector('.popup__input_url');

addCardButton.addEventListener("click", (evt) => {
	evt.preventDefault();

    renderCard((nameCardInput.value), (urlInput.value));
    nameCardInput.value = '';
    urlInput.value = '';

  popupNewCard.classList.remove('popup_opened') 
});
