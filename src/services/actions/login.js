import { resetPasswordRequest, resetPassword, registration } from "../../utils/burger-api";

export const PASSWORD_RESET_REQUEST_REQUEST = "PASSWORD_RESET_REQUEST_REQUEST";
export const PASSWORD_RESET_REQUEST_SUCCESS = "PASSWORD_RESET_REQUEST_SUCCESS";
export const PASSWORD_RESET_REQUEST_FAILED = "PASSWORD_RESET_REQUEST_FAILED";
export const PASSWORD_RESET_REQUEST = "PASSWORD_RESET_REQUEST";
export const PASSWORD_RESET_SUCCESS = "PASSWORD_RESET_SUCCESS";
export const PASSWORD_RESET_FAILED = "PASSWORD_RESET_FAILED";
export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";


export function passwordResetRequest(email) {
    return function (dispatch) {
      dispatch({
        type: PASSWORD_RESET_REQUEST_REQUEST,
      });
      resetPasswordRequest(email).then((res) => {
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
      })  };
  }


  export function passwordReset(data) {
    return function (dispatch) {
      dispatch({
        type: PASSWORD_RESET_REQUEST,
      });
      resetPassword(data).then((res) => {
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
      })  };
  }

  

  export function register(data) {
    return function (dispatch) {
      dispatch({
        type: REGISTRATION_REQUEST,
      });
      registration(data).then((res) => {
        if (res && res.success) {
          dispatch({
            type: REGISTRATION_SUCCESS,
            payload: res,
          });
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
      })  };
  }