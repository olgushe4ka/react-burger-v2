import { AppDispatch } from "../../types";
import {
  resetPasswordRequest,
  resetPassword,
  registration,
  authorization,
  getUserInformation,
  changeUserInformation,
  logoutApi,
} from "../../utils/burger-api";
import { setCookie } from "../../utils/cookie";

export const PASSWORD_RESET_REQUEST_REQUEST: "PASSWORD_RESET_REQUEST_REQUEST" =
  "PASSWORD_RESET_REQUEST_REQUEST";
export const PASSWORD_RESET_REQUEST_SUCCESS: "PASSWORD_RESET_REQUEST_SUCCESS" =
  "PASSWORD_RESET_REQUEST_SUCCESS";
export const PASSWORD_RESET_REQUEST_FAILED: "PASSWORD_RESET_REQUEST_FAILED" =
  "PASSWORD_RESET_REQUEST_FAILED";

export const PASSWORD_RESET_REQUEST: "PASSWORD_RESET_REQUEST" =
  "PASSWORD_RESET_REQUEST";
export const PASSWORD_RESET_SUCCESS: "PASSWORD_RESET_SUCCESS" =
  "PASSWORD_RESET_SUCCESS";
export const PASSWORD_RESET_FAILED: "PASSWORD_RESET_FAILED" =
  "PASSWORD_RESET_FAILED";

export const REGISTRATION_REQUEST: "REGISTRATION_REQUEST" =
  "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS" =
  "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED: "REGISTRATION_FAILED" = "REGISTRATION_FAILED";

export const LOGIN_REQUEST: "LOGIN_REQUEST" = "LOGIN_REQUEST";
export const LOGIN_SUCCESS: "LOGIN_SUCCESS" = "LOGIN_SUCCESS";
export const LOGIN_FAILED: "LOGIN_FAILED" = "LOGIN_FAILED";

export const GET_USER_INFO_REQUEST: "GET_USER_INFO_REQUEST" =
  "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS: "GET_USER_INFO_SUCCESS" =
  "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILED: "GET_USER_INFO_FAILED" =
  "GET_USER_INFO_FAILED";

export const CHANGE_USER_INFO_REQUEST: "CHANGE_USER_INFO_REQUEST" =
  "CHANGE_USER_INFO_REQUEST";
export const CHANGE_USER_INFO_SUCCESS: "CHANGE_USER_INFO_SUCCESS" =
  "CHANGE_USER_INFO_SUCCESS";
export const CHANGE_USER_INFO_FAILED: "CHANGE_USER_INFO_FAILED" =
  "CHANGE_USER_INFO_FAILED";

export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED: "LOGOUT_FAILED" = "LOGOUT_FAILED";

// Типизация экшенов

export interface IPasswordResetRequestRequestAction {
  readonly type: typeof PASSWORD_RESET_REQUEST_REQUEST;
}
export interface IPasswordResetRequestSuccessAction {
  payload: any;
  readonly type: typeof PASSWORD_RESET_REQUEST_SUCCESS;
}
export interface IPasswordResetRequestFailedAction {
  readonly type: typeof PASSWORD_RESET_REQUEST_FAILED;
}

export interface IPasswordResetRequestAction {
  readonly type: typeof PASSWORD_RESET_REQUEST;
}
export interface IPasswordResetSuccessAction {
  payload: any;
  readonly type: typeof PASSWORD_RESET_SUCCESS;
}
export interface IPasswordResetFailedAction {
  readonly type: typeof PASSWORD_RESET_FAILED;
}

export interface IRegustrationRequestAction {
  readonly type: typeof REGISTRATION_REQUEST;
}
export interface IRegustrationSuccessAction {
  payload: any;
  readonly type: typeof REGISTRATION_SUCCESS;
}
export interface IRegustrationFailedAction {
  readonly type: typeof REGISTRATION_FAILED;
}

export interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}
export interface ILoginSuccessAction {
  payload: { user: { email: string; name: string } };
  readonly type: typeof LOGIN_SUCCESS;
}
export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
}

export interface IGetUserInfoRequestAction {
  readonly type: typeof GET_USER_INFO_REQUEST;
}
export interface IGetUserInfoSuccessAction {
  payload: any;
  readonly type: typeof GET_USER_INFO_SUCCESS;
}
export interface IGetUserInfoFailedAction {
  readonly type: typeof GET_USER_INFO_FAILED;
}

export interface IChangeUserInfoRequestAction {
  readonly type: typeof CHANGE_USER_INFO_REQUEST;
}
export interface IChangeUserInfoSuccessAction {
  payload: any;
  readonly type: typeof CHANGE_USER_INFO_SUCCESS;
}
export interface IChangeUserInfoFailedAction {
  readonly type: typeof CHANGE_USER_INFO_FAILED;
}

export interface ILogautRequestAction {
  readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogautSuccessAction {
  payload: any;
  readonly type: typeof LOGOUT_SUCCESS;
}
export interface ILogautInfoFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}

// Объединяем в Union
export type TLoginActions =
  | IPasswordResetRequestRequestAction
  | IPasswordResetRequestSuccessAction
  | IPasswordResetRequestFailedAction
  | IPasswordResetRequestAction
  | IPasswordResetSuccessAction
  | IPasswordResetFailedAction
  | IRegustrationRequestAction
  | IRegustrationSuccessAction
  | IRegustrationFailedAction
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | IGetUserInfoRequestAction
  | IGetUserInfoSuccessAction
  | IGetUserInfoFailedAction
  | IChangeUserInfoRequestAction
  | IChangeUserInfoSuccessAction
  | IChangeUserInfoFailedAction
  | ILogautRequestAction
  | ILogautSuccessAction
  | ILogautInfoFailedAction;

// Генераторы экшенов

export function passwordResetRequest(email:any) {
  return function (dispatch: AppDispatch) {
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

export function passwordReset(data: any) {
  return function (dispatch: AppDispatch) {
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

export function register(data: {}) {
  return function (dispatch: AppDispatch) {
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

export function login(data: {}) {
  return function (dispatch: AppDispatch) {
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

export function getProfileInfo(data?: {}) {
  return function (dispatch: AppDispatch) {
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

export function changeProfileInfo(data: {}) {
  return function (dispatch: AppDispatch) {
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
  return function (dispatch: AppDispatch) {
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
