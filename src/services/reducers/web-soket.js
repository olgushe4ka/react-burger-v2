import { createReducer } from "@reduxjs/toolkit";
import { WebsocketStatus } from "../../utils/constants";
import {
  wsClose,
  wsConnecting,
  wsError,
  wsMessage,
  wsOpen,
} from "../actions/web-soket";

//import { liveTableUpdate } from './live-table-update';

const initialState = {
  status: WebsocketStatus.OFFLINE,
  connectionError: "",
  table: [],
};

export const liveOrderFeedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnecting, (state) => {
      state.status = WebsocketStatus.CONNECTING;
    })
    .addCase(wsOpen, (state) => {
      state.status = WebsocketStatus.ONLINE;
      state.connectionError = "";
    })
    .addCase(wsClose, (state) => {
      state.status = WebsocketStatus.OFFLINE;
      state.connectionError = "";
    })
    .addCase(wsError, (state, action) => {
      state.connectionError = action.payload;
    })
    .addCase(wsMessage, (state, action) => {
      state.table = action.payload;
    });
});
