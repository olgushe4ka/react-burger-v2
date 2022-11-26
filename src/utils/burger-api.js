const baseUrl = "https://norma.nomoreparties.space/api";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export function getIngredients() {
  return request(`${baseUrl}/ingredients`);
}

export function saveOrder(data) {
  return request(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function resetPasswordRequest(data) {
  return request(`${baseUrl}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function resetPassword(data) {
  return request(`${baseUrl}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function registration(data) {
  return request(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function authorization(data) {
  return request(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

// export function testRegistration() {
//   return request(`${baseUrl}/auth/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       "email": "ol9ushe4ka@yandex.ru",
//       "password": "password",
//       "name": "Olga"
//     }),
//   });
// }

export function logoutApi(data) {
  return request(`${baseUrl}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function tokenApi(data) {
  return request(`${baseUrl}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}