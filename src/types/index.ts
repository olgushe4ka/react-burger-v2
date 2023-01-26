import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../index";
import { TIngredientsActions } from "../services/actions/ingredients";
import { TLoginActions } from "../services/actions/login";
import { TWSActions } from "../services/actions/web-soket";
import { rootReducer } from "../services/reducers";

type TApplicationActions = TIngredientsActions | TLoginActions | TWSActions;
//export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;

// export type AppDispatch = typeof store.dispatch;

// export type AppThunk<ReturnType = void> = ActionCreator<
//   ThunkAction<ReturnType, Action, RootState, TApplicationActions>
// >;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;
