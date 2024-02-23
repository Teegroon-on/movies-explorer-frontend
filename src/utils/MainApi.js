import { BASE_URL } from "./constants/urlConstants";

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._credentials = options.credentials;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return res.json().then((err) => {
      return Promise.reject(`Ошибка ${res.status}: ${err.message || err.error}`);
    });
  }

  _request(endpoint, options) {
    return fetch(`${this._baseUrl}${endpoint}`, options).then(this._checkResponse);
  }

  getUserInfo() {
    return this._request('/users/me', {
      method: 'GET',
      withCredentials: true,
      credentials: this._credentials,
      headers: this._headers,
    });
  }

  editProfile(name, email) {
    return this._request('/users/me', {
      method: 'PATCH',
      withCredentials: true,
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  getSavedMovies() {
    return this._request('/movies', {
      method: 'GET',
      headers: this._headers,
      withCredentials: true,
      credentials: this._credentials,
    });
  }

  saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  }) {
    return this._request('/movies', {
      method: 'POST',
      withCredentials: true,
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      }),
    });
  }

  deleteMovie(movieId) {
    return this._request(`/movies/${movieId}`, {
      method: 'DELETE',
      withCredentials: true,
      credentials: this._credentials,
      headers: this._headers,
    });
  }

  register = (name, email, password) => {
    return this._request(`/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    });
  };

  authorize = (email, password) => {
    return this._request(`/signin`, {
      method: 'POST',
      withCredentials: true,
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    });
  };

  signout = () => {
    return this._request(`/signout`, {
      method: 'GET',
      withCredentials: true,
      credentials: this._credentials,
      headers: this._headers,
    });
  };

  getContent = () => {
    return this._request(`/users/me`, {
      method: 'GET',
      withCredentials: true,
      credentials: this._credentials,
      headers: this._headers,
    });
  };
}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
});

export default mainApi;