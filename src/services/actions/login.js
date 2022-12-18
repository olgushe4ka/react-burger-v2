import {
  resetPasswordRequest,
  resetPassword,
  registration,
  authorization,
  getUserInformation,
  changeUserInformation,
  logoutApi,
} from "../../utils/burger-api";
import { getCookie, setCookie } from "../../utils/cookie";

export const PASSWORD_RESET_REQUEST_REQUEST = "PASSWORD_RESET_REQUEST_REQUEST";
export const PASSWORD_RESET_REQUEST_SUCCESS = "PASSWORD_RESET_REQUEST_SUCCESS";
export const PASSWORD_RESET_REQUEST_FAILED = "PASSWORD_RESET_REQUEST_FAILED";
export const PASSWORD_RESET_REQUEST = "PASSWORD_RESET_REQUEST";
export const PASSWORD_RESET_SUCCESS = "PASSWORD_RESET_SUCCESS";
export const PASSWORD_RESET_FAILED = "PASSWORD_RESET_FAILED";
export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILED = "GET_USER_INFO_FAILED";
export const CHANGE_USER_INFO_REQUEST = "CHANGE_USER_INFO_REQUEST";
export const CHANGE_USER_INFO_SUCCESS = "CHANGE_USER_INFO_SUCCESS";
export const CHANGE_USER_INFO_FAILED = "CHANGE_USER_INFO_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export function passwordResetRequest(email) {
  return function (dispatch) {
    dispatch({
      type: PASSWORD_RESET_REQUEST_REQUEST,
    });
    resetPasswordRequest(email)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: PASSWORD_RESET_REQUEST_SUCCESS,
            payload: res,
          });
        } else {
          dispatch({
            type: PASSWORD_RESET_REQUEST_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function passwordReset(data) {
  return function (dispatch) {
    dispatch({
      type: PASSWORD_RESET_REQUEST,
    });
    resetPassword(data)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: PASSWORD_RESET_SUCCESS,
            payload: res,
          });
        } else {
          dispatch({
            type: PASSWORD_RESET_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: PASSWORD_RESET_FAILED,
        });
      });
  };
}

export function register(data) {
  return function (dispatch) {
    dispatch({
      type: REGISTRATION_REQUEST,
    });
    registration(data)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: REGISTRATION_SUCCESS,
            payload: res,
          });
          localStorage.setItem("refreshToken", res.refreshToken);
          setCookie("accessToken", res.accessToken);
        } else {
          dispatch({
            type: REGISTRATION_FAILED,
          });
        }
      })

      .catch((err) => {
        console.log(err);
        dispatch({
          type: REGISTRATION_FAILED,
        });
      });
  };
}

export function login(data) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    authorization(data)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res,
          });
          const accessToken = res.accessToken.split("Bearer ")[1];

          localStorage.setItem("refreshToken", res.refreshToken);
          setCookie("accessToken", accessToken);
        } else {
          dispatch({
            type: LOGIN_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: LOGIN_FAILED,
        });
      });
  };
}

export function getProfileInfo() {
  return function (dispatch) {
    dispatch({
      type: GET_USER_INFO_REQUEST,
    });
    getUserInformation()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_USER_INFO_SUCCESS,
            payload: res,
          });
        } else {
          dispatch({
            type: GET_USER_INFO_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function changeProfileInfo(data) {
  return function (dispatch) {
    dispatch({
      type: CHANGE_USER_INFO_REQUEST,
    });
    changeUserInformation(data)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: CHANGE_USER_INFO_SUCCESS,
            payload: res,
          });
        } else {
          dispatch({
            type: CHANGE_USER_INFO_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function logOut() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    logoutApi()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: LOGOUT_SUCCESS,
            payload: res,
          });
        } else {
          dispatch({
            type: LOGOUT_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
