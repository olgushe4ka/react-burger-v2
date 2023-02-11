import { combineReducers } from "redux";

import { ingredientsReducer } from "./ingredients";
import { loginReducer } from "./login";
import {
  // wsConnect,
  // wsDisconnect,
  // wsConnecting,
  // wsOpen,
  // wsClose,
  // wsMessage,
  // wsError,

  LIVE_ORDER_FEED_CONNECT,
  LIVE_ORDER_FEED_DISCONNECT,
  LIVE_ORDER_FEED_WS_CONNECTING,
  LIVE_ORDER_FEED_WS_OPEN,
  LIVE_ORDER_FEED_WS_CLOSE,
  LIVE_ORDER_FEED_WS_MESSAGE,
  LIVE_ORDER_FEED_WS_ERROR,
  TWSActions,
} from "../actions/web-soket";
import { socketMiddleware } from "../middleware/soket-middleware";
import { liveOrderFeedReducer } from "./web-soket";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  login: loginReducer,
  ws: liveOrderFeedReducer,
});

export const wsActions = {
  wsConnect: LIVE_ORDER_FEED_CONNECT,
  wsDisconnect: LIVE_ORDER_FEED_DISCONNECT,
  wsConnecting: LIVE_ORDER_FEED_WS_CONNECTING,
  onOpen: LIVE_ORDER_FEED_WS_OPEN,
  onClose: LIVE_ORDER_FEED_WS_CLOSE,
  onError: LIVE_ORDER_FEED_WS_ERROR,
  onMessage: LIVE_ORDER_FEED_WS_MESSAGE,
};

export const burgersMiddleware = socketMiddleware(wsActions);
