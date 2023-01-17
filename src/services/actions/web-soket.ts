import { createAction } from "@reduxjs/toolkit";

export const wsConnect = createAction("LIVE_ORDER_FEED_CONNECT");
export const wsDisconnect = createAction("LIVE_ORDER_FEED_DISCONNECT");
export const wsConnecting = createAction("LIVE_ORDER_FEED_WS_CONNECTING");
export const wsOpen = createAction("LIVE_ORDER_FEED_WS_OPEN");
export const wsClose = createAction("LIVE_ORDER_FEED_WS_CLOSE");
export const wsMessage = createAction("LIVE_ORDER_FEED_WS_MESSAGE");
export const wsError = createAction("LIVE_ORDER_FEED_WS_ERROR");

// Типизация экшенов

export interface IwsConnectAction {
  readonly type: typeof wsConnect;
}
export interface IwsDisconnectAction {
  readonly type: typeof wsDisconnect;
}
export interface IwsConnectingAction {
  readonly type: typeof wsConnecting;
}

export interface IwsOpenAction {
  readonly type: typeof wsOpen;
}
export interface IwsCloseAction {
  readonly type: typeof wsClose;
}
export interface IwsMessageAction {
  readonly type: typeof wsMessage;
}

export interface IwsErrorAction {
  readonly type: typeof wsError;
}

// Объединяем в Union
export type TWSActions =
  | IwsConnectAction
  | IwsDisconnectAction
  | IwsConnectingAction
  | IwsOpenAction
  | IwsCloseAction
  | IwsMessageAction
  | IwsErrorAction;
