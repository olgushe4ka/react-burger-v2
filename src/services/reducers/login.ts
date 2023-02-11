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
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILED,
  CHANGE_USER_INFO_REQUEST,
  CHANGE_USER_INFO_SUCCESS,
  CHANGE_USER_INFO_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  TLoginActions,
} from "../actions/login";

type TLoginListState = {
  passwordResetRequest: any;
  passwordResetRequestFailed: boolean;
  passwordResetRequestIsLoading: boolean;

  passwordReset: any;
  passwordResetFailed: boolean;
  passwordResetIsLoading: boolean;

  registration: any;
  registrationFailed: boolean;
  registrationIsLoading: boolean;

  login: {
    success?: any;
    user: {
      email: string;
      name: string;
    };
  };
  loginFailed: boolean;
  loginIsLoading: boolean;

  getUserInfoFailed: boolean;
  getUserInfoIsLoading: boolean;

  isAuthChecked: boolean;
  userName: string;
  email: string;

  changeUserInfoFailed: boolean;
  changeUserInfoIsLoading: boolean;

  logOutFailed: boolean;
  logOutSuccess: boolean;
  logOutIsLoading: boolean;
};

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

  login: {
    user: {
      email: "test",
      name: "test",
    },
  },
  loginFailed: false,
  loginIsLoading: false,

  getUserInfoFailed: false,
  getUserInfoIsLoading: false,

  isAuthChecked: false,
  userName: "testing",
  email: "testing",

  changeUserInfoFailed: false,
  changeUserInfoIsLoading: false,

  logOutFailed: false,
  logOutSuccess: false,
  logOutIsLoading: false,
};

export const loginReducer = (
  state = loginInitialState,
  action: TLoginActions
): TLoginListState => {
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
        passwordReset: action.payload,
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
        registration: action.payload,
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

    case LOGIN_REQUEST: {
      return {
        ...state,
        loginIsLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginFailed: false,
        login: action.payload,
        loginIsLoading: false,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginFailed: true,
        loginIsLoading: false,
      };
    }

    case GET_USER_INFO_REQUEST: {
      return {
        ...state,
        getUserInfoIsLoading: true,
      };
    }
    case GET_USER_INFO_SUCCESS: {
      return {
        ...state,
        getUserInfoFailed: false,
        isAuthChecked: action.payload.success,
        userName: action.payload.user.name,
        email: action.payload.user.email,
        getUserInfoIsLoading: false,
      };
    }
    case GET_USER_INFO_FAILED: {
      return {
        ...state,
        getUserInfoFailed: true,
        getUserInfoIsLoading: false,
      };
    }

    case CHANGE_USER_INFO_REQUEST: {
      return {
        ...state,
        changeUserInfoIsLoading: true,
      };
    }
    case CHANGE_USER_INFO_SUCCESS: {
      return {
        ...state,
        changeUserInfoFailed: false,
        isAuthChecked: action.payload.success,
        userName: action.payload.user.name,
        email: action.payload.user.email,
        changeUserInfoIsLoading: false,
      };
    }
    case CHANGE_USER_INFO_FAILED: {
      return {
        ...state,
        changeUserInfoFailed: true,
        changeUserInfoIsLoading: false,
      };
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        logOutIsLoading: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logOutFailed: false,
        logOutSuccess: action.payload.success,
        logOutIsLoading: false,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logOutFailed: true,
        logOutIsLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
