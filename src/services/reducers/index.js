import { combineReducers } from "redux";

import { ingredientsReducer } from "./ingredients";
import { loginReducer } from "./login";
import { wsConnect, wsDisconnect, wsConnecting, wsOpen, wsClose, wsMessage, wsError } from "../actions/web-soket";
import { socketMiddleware } from "../middleware/soket-middleware";
import { liveOrderFeedReducer } from "./web-soket";


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  login: loginReducer,
  ws: liveOrderFeedReducer
});


export const wsActions = {
    wsConnect,
    wsDisconnect,
    wsConnecting,
    onOpen: wsOpen,
    onClose: wsClose,
    onError: wsError,
    onMessage: wsMessage
}

export const burgersMiddleware = socketMiddleware(wsActions);
