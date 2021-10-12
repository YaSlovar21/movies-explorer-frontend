export const BASE_URL = 'https://api.yamovie.nomoredomains.monster';

export const register = (name, password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({name, password, email})
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  })
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({email, password})
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  })
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
  })
  .then((response) => {
    if (response.ok) {
      console.log(response);
      return response.json();
    } else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  })
};

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
  .then((response) => {
    if (response.ok) {
      console.log('проверка из апи успех');
      return response.json();
    } else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  })
}


export const getInfoUser = () => {
    return fetch(`${BASE_URL}/users/me`, {
        headers: {
            'Content-Type': 'application/json'
          },
        credentials: 'include',
    })
    .then((response) => {
        if (response.ok) {
            console.log(response);
            return response.json();
          } else {
            return Promise.reject(`Ошибка: ${response.status}`);
          }
    });
}

export const setInfoUser = (name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
        credentials: 'include',
    })
    .then((response)=> {
        if (response.ok) {
            console.log(response);
            return response.json();
          } else {
            return Promise.reject(`Ошибка: ${response.status}`);
          }
    });
}

export const addMovie = ({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  }) => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailer: trailer,
        nameRU: nameRU,
        nameEN: nameEN,
        thumbnail: thumbnail,
        movieId: movieId,
      }),
    }).then((response) => {
        if (response.ok) {
            console.log(response);
            return response.json();
          } else return Promise.reject(`Ошибка: ${response.status}`);
    });
  };

export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    }).then((response) => {
        if (response.ok) {
            console.log(response);
            return response.json();
          } else return Promise.reject(`Ошибка: ${response.status}`);
    });
  };

export const deleteMovie = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',

    }).then((response) => {
        if (response.ok) {
            console.log(response);
            return response.json();
          } else return Promise.reject(`Ошибка: ${response.status}`);
    });
  };