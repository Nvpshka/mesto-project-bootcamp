import { profileName, profileJob, elements, editButton, template, nameInput, jobInput } from './const.js';
import { closePopup, handleOpenImage, renderLoading, openPopupDeleteCard } from './modal.js';
import { addLikeOnServer, deleteLikeFromServer, updateProfile } from './api.js';



const addCard = (data) => {
  const card = template.cloneNode(true);
  card.id = data._id;
  const image = card.querySelector('.elements__image');
  image.src = data.link;
  image.alt = data.name;
  image.addEventListener('click', handleOpenImage);
  card.querySelector(".elements__name").textContent = data.name;
  const trashButton = card.querySelector(".trash-button");
  trashButton.addEventListener("click", openPopupDeleteCard);
  disableDeleteButton(data, trashButton);
  card.querySelector('.elements__like-numbers').textContent = data.likes.length;
   const likeButton = card.querySelector(".elements__like");


  likeButton.addEventListener('click', handleLikeCard);
 
  data.likes.forEach((like) => checkLikeButton(like._id, likeButton));
  return card;
};

// const handleDeleteCard = (event) => {
//   event.target.closest(".elements__card").remove();
// };


const handleLikeCard = (evt) => {
  const card = evt.target.closest('.elements__card');
  const likeNumber = card.querySelector('.elements__like-numbers');
  if (evt.target.classList.contains('elements__like_active')) {
    deleteLikeFromServer(card.id)
      .then((res) => {
        likeNumber.textContent = res.likes.length;
        evt.target.classList.remove('elements__like_active');
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  } else {
    addLikeOnServer(card.id)
      .then((res) => {
        likeNumber.textContent = res.likes.length;
        evt.target.classList.add('elements__like_active');
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  }
};

function checkLikeButton(like, likeButton) {
  if (like === profileName.id) {
    likeButton.classList.add('elements__like_active')
  }
}

const renderCard = (data) => {
  elements.prepend(addCard(data))
}

function disableDeleteButton (item, trashButton) {
  if (item.owner._id === profileName.id) {
    trashButton.disabled = false;
    trashButton.classList.remove('trash-button_disabled');
  } else {
    trashButton.disabled = true;
    trashButton.classList.add('trash-button_disabled');
  }
}


function editProfile(evt) {
  renderLoading(true, editButton);
  updateProfile(nameInput.value, jobInput.value)
    .then(res => {
      profileName.textContent = res.name;
      profileJob.textContent = res.about;
      closePopup();
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
    .finally(() => {
      renderLoading(false, editButton);
    })
  };



export { editProfile, addCard, renderCard, disableDeleteButton }
