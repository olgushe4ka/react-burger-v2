const baseUrl = "https://norma.nomoreparties.space/api";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function request(url, options) {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return fetch(url, options).then(checkResponse)
}

export function getIngredients() {
  return request(`${baseUrl}/ingredients`);
}


// export function getIngredients() {
//   return fetch(`${baseUrl}/ingredients`).then(checkResponse);
// }


export function saveOrder(data) {
  return request(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}


// export function saveOrder(data) {
//   return fetch(`${baseUrl}/orders`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   }).then(checkResponse);
// }