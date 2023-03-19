import { config } from './const.js';

function handleResponse(res) {
	if (res.ok) {
		return res.json();
		console.log('i work');
	};
	return Promise.reject(`Ошибка: ${res.status}`);
};

function getUserInfo() {
return fetch(`${config.baseUrl}/users/me`, {
  method: 'GET',
  headers: config.headers
})
  .then(res => handleResponse(res));
};


function getCardsFromServer() {
	return fetch(`${config.baseUrl}/cards`, {
		method: 'GET',
		headers: config.headers
	})
	.then(res => handleResponse(res));
}

function updateProfile (name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
  // .then((res) => {
  // 	console.log(res)
  // })
  .then(res => handleResponse(res))
}

function updateAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
  .then(res => handleResponse(res))
}

function addCardOnServer(data) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link
    })
  })
  .then(res => handleResponse(res))
}

function deleteCardFromServer(id) {
  return fetch(`${config.baseUrl}/cards/` + id, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(res => handleResponse(res))
}

function addLikeOnServer(id) {
  return fetch(`${config.baseUrl}/cards/likes/` + id, {
    method: 'PUT',
    headers: config.headers,
  })

  .then(res => handleResponse(res))
}

function deleteLikeFromServer(id) {
  return fetch(`${config.baseUrl}/cards/likes/` + id, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(res => handleResponse(res))
}

export { getUserInfo, getCardsFromServer, updateProfile, updateAvatar, 
	addCardOnServer, addLikeOnServer, deleteLikeFromServer, deleteCardFromServer }