import {
  PASSWORD_RESET_REQUEST_REQUEST,
  PASSWORD_RESET_REQUEST_SUCCESS,
  PASSWORD_RESET_REQUEST_FAILED,
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
} from "../actions/login";

const loginInitialState = {
  passwordResetRequest: [],
  passwordResetRequestFailed: false,
  passwordResetRequestIsLoading: false,

  passwordReset: [],
  passwordResetFailed: false,
  passwordResetIsLoading: false,

  registration: [],
  registrationFailed: false,
  registrationIsLoading: false,
};

export const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case PASSWORD_RESET_REQUEST_REQUEST: {
      return {
        ...state,
        passwordResetRequestIsLoading: true,
      };
    }
    case PASSWORD_RESET_REQUEST_SUCCESS: {
      return {
        ...state,
        passwordResetRequestFailed: false,
        passwordResetRequest: action.payload,
        passwordResetRequestIsLoading: false,
      };
    }
    case PASSWORD_RESET_REQUEST_FAILED: {
      return {
        ...state,
        passwordResetRequestFailed: true,
        passwordResetRequestIsLoading: false,
      };
    }

    case PASSWORD_RESET_REQUEST: {
      return {
        ...state,
        passwordResetIsLoading: true,
      };
    }
    case PASSWORD_RESET_SUCCESS: {
      return {
        ...state,
        passwordResetFailed: false,
        passwordReset: action.items,
        passwordResetIsLoading: false,
      };
    }
    case PASSWORD_RESET_FAILED: {
      return {
        ...state,
        passwordResetFailed: true,
        passwordResetIsLoading: false,
      };
    }

    case REGISTRATION_REQUEST: {
      return {
        ...state,
        registrationIsLoading: true,
      };
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        registrationFailed: false,
        registration: action.items,
        registrationIsLoading: false,
      };
    }
    case REGISTRATION_FAILED: {
      return {
        ...state,
        registrationFailed: true,
        registrationIsLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};

