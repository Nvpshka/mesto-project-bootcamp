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
const template = document.querySelector('.template').content.querySelector(".elements__card");
const elements = document.querySelector(".elements");
const addCardButton = popupNewCard.querySelector(".popup__button");
const popupFullImage = document.querySelector(".popup__full-img");
const popupImage = popupFullImage.querySelector(".popup__image");
const popupCaption = popupFullImage.querySelector(".popup__caption");
const nameCardInput = popupNewCard.querySelector('.popup__input_name-card');
const urlInput = popupNewCard.querySelector(".popup__input_url");


//открыть попап редактирование профиля
editButton.addEventListener('click', 
	function (evt) {
		popupEditProfile.classList.add('popup_opened')
	});
//Открыть попап добавления карточки
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
//работа кнопки сохранить у попапа редактирования профиля
saveButton.addEventListener('click', editProfile);

//функция создания карточки на основании готового массива
const createCard = (data) => {
  const card = template.cloneNode(true);
  card.querySelector(".elements__image").src = data.link;
  card.querySelector(".elements__name").textContent = data.name;
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
}
//функцтя открытия картинки
function handleOpenImage (event){
	const card = event.target.closest('.elements__card');
	popupImage.src = event.target.src;
	popupCaption.textContent = card.querySelector('.elements__name').textContent;

	popupFullImage.classList.add("popup_opened_dark");
}
//закрытие картинки
popupFullImage.querySelector(".cross-button").addEventListener("click", function(){
	popupFullImage.classList.remove('popup_opened_dark')
	
});
//создание карточек
const renderCard = (data) => {
  elements.prepend(createCard(data));
};
//инициализация данных массива
initialCards.forEach((data) => {
	renderCard(data);
})

//добавление пользовательских карточек
addCardButton.addEventListener("click", (evt) => {
	evt.preventDefault();

	const newCard = {name: nameCardInput.value, link: urlInput.value}
    renderCard(newCard);
    nameCardInput.value = '';
    urlInput.value = '';

  popupNewCard.classList.remove('popup_opened') 
});

