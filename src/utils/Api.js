class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  //проверить ответ сервера
  _getJson(res) {
    {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  //получить карточки
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((res) => this._getJson(res));
  }

  //получить информацию о пользователе
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then((res) => this._getJson(res));
  }

  //обновить информацию пользователя
  updateUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.userName,
        about: data.userJob,
      }),
    }).then((res) => this._getJson(res));
  }

  //обновить аватар пользователя
  updateUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.userAvatar,
      }),
    }).then((res) => this._getJson(res));
  }

  //добавить новые карточки
  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._getJson(res));
  }

  //удалить карточку
  deleteCard(_id) {
    return fetch(`${this._url}/cards/${_id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._getJson(res));
  }

  // // поставить лайк карточке
  // addLikeCard(_id) {
  //   return fetch(`${this._url}/cards/${_id}/likes`, {
  //     method: "PUT",
  //     headers: this._headers,
  //   }).then((res) => this._getJson(res));
  // }
  //}

  // Ставим и удаляем лайк карточке
  changeLikeCardStatus(_id, isLiked) {
    if (isLiked) {
      return fetch(`${this._url}/cards/${_id}/likes`, {
        method: "PUT",
        headers: this._headers,
      }).then((res) => this._getJson(res));
    } else {
      return fetch(`${this._url}/cards/${_id}/likes`, {
        method: "DELETE",
        headers: this._headers,
      }).then((res) => this._getJson(res));
    }
  }
}

//   // удалить лайк с карточки
//   deleteLikeCard(_id) {
//     return fetch(`${this._url}/cards/${_id}/likes`, {
//       method: "DELETE",
//       headers: this._headers,
//     }).then((res) => this._getJson(res));
//   }
// }

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-61",
  headers: {
    authorization: "44fbd263-dcc3-40dc-bdca-15d93dcff4a4",
    "Content-Type": "application/json",
  },
});

export default api;
