import { createAction } from "@reduxjs/toolkit";

export const wsConnect = createAction("LIVE_ORDER_FEED_CONNECT");
export const wsDisconnect = createAction("LIVE_ORDER_FEED_DISCONNECT");
export const wsConnecting = createAction("LIVE_ORDER_FEED_WS_CONNECTING");
export const wsOpen = createAction("LIVE_ORDER_FEED_WS_OPEN");
export const wsClose = createAction("LIVE_ORDER_FEED_WS_CLOSE");
export const wsMessage = createAction("LIVE_ORDER_FEED_WS_MESSAGE");
export const wsError = createAction("LIVE_ORDER_FEED_WS_ERROR");
