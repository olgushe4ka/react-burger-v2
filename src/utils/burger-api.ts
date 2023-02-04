import { setCookie, getCookie } from "./cookie";

const baseUrl = "https://norma.nomoreparties.space/api";

export const baseWS = "wss://norma.nomoreparties.space/orders/all";
export const baseWSUser = "wss://norma.nomoreparties.space/orders";

// function checkResponse(res) {
//   if (res.ok) {
//     return res.json();
//   }
//   return Promise.reject(`Ошибка: ${res.status}`);
// }

function checkResponse(res: Response) {
  return res.ok ? res.json() : res.json().then((res) => Promise.reject(res));
}

function request(url: string, options?: RequestInit) {
  return fetch(url, options).then(checkResponse);
}

export function getIngredients() {
  return request(`${baseUrl}/ingredients`);
}

export function saveOrder(data: {}) {
  return fetchWithRefresh(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify(data),
  });
}

export function resetPasswordRequest(data: { email: string }) {
  return request(`${baseUrl}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function resetPassword(data: {
  value: {
    password: string;
    token: string| number;
  };
}) {
  console.log(data);
  return request(`${baseUrl}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function registration(data: {}) {
  return fetchWithRefresh(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function authorization(data: {}) {
  return fetchWithRefresh(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("accessToken"),
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

export function logoutApi() {
  return request(`${baseUrl}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
}

// export function tokenApi(data) {
//   return request(`${baseUrl}/auth/token`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
// }

export const refreshToken = () => {
  return fetch(`${baseUrl}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      // Authorization: 'Bearer ' + getCookie('token')
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse);
};

const fetchWithRefresh = async (url: string, options?: any) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (error: any) {
    // if (error.status === 403 ) {
    if (error.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      setCookie("accessToken", refreshData.accessToken);

      options.headers.authorization = refreshData.accessToken;

      const res = await fetch(url, options);
      return await checkResponse(res);
    }
    {
      return Promise.reject(error);
    }
  }
};

export function getUserInformation() {
  return fetchWithRefresh(`${baseUrl}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("accessToken"),
    },
    //  body: JSON.stringify(),
  });
}

export function changeUserInformation(data: {}) {
  return fetchWithRefresh(`${baseUrl}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify(data),
  });
}
