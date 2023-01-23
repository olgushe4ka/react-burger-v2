import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WebsocketStatus } from "../../utils/constants";
import {
  wsClose,
  wsConnecting,
  wsError,
  wsMessage,
  wsOpen,
  TWSActions
} from "../actions/web-soket";


export type TWSListState = {
  status: string,
  connectionError: string,
  table: any,
};

const initialState: TWSListState = {
  status: WebsocketStatus.OFFLINE,
  connectionError: "",
  table: [],
};



// export const liveOrderFeedReducer = createSlice({
//   name: 'ws',
//   initialState,
//   reducers: {
//     wsConnecting: (state) => {
//       state.status = WebsocketStatus.CONNECTING;
//       },
//       wsOpen: (state) => {
//         state.status = WebsocketStatus.ONLINE;
//         state.connectionError = "";
//       },
//       wsClose: (state) => {
//         state.status = WebsocketStatus.OFFLINE;
//         state.connectionError = "";
//       },
//       wsError: (state, action: PayloadAction<any>) => {
//         state.connectionError = action.payload;
//       },
//       wsMessage: (state, action: PayloadAction<any>) => {
//         state.table = action.payload;
//       },
//   },
// })

// export const { wsMessage, wsError, wsClose, wsOpen, wsConnecting } = liveOrderFeedReducer.actions;


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
    .addCase(wsError, (state:any, action:PayloadAction<any>) => {
      state.connectionError = action.payload;
    })
    .addCase(wsMessage, (state:any, action:PayloadAction<any>) => {
      state.table = action.payload;
    });
});
