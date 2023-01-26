import {
  AnyListenerPredicate,
  createReducer,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { WebsocketStatus } from "../../utils/constants";
import {
  // wsClose,
  // wsConnecting,
  // wsError,
  // wsMessage,
  // wsOpen,
  TWSActions,
  LIVE_ORDER_FEED_CONNECT,
  LIVE_ORDER_FEED_DISCONNECT,
  LIVE_ORDER_FEED_WS_CONNECTING,
  LIVE_ORDER_FEED_WS_OPEN,
  LIVE_ORDER_FEED_WS_CLOSE,
  LIVE_ORDER_FEED_WS_MESSAGE,
  LIVE_ORDER_FEED_WS_ERROR,
} from "../actions/web-soket";

export type TWSListState = {
  status: string;
  connectionError: string;
  table: any;
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

// export const liveOrderFeedReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(LIVE_ORDER_FEED_WS_CONNECTING, (state) => {
//       state.status = WebsocketStatus.CONNECTING;
//     })
//     .addCase(LIVE_ORDER_FEED_WS_OPEN, (state) => {
//       state.status = WebsocketStatus.ONLINE;
//       state.connectionError = "";
//     })
//     .addCase(LIVE_ORDER_FEED_WS_CLOSE, (state) => {
//       state.status = WebsocketStatus.OFFLINE;
//       state.connectionError = "";
//     })
//     .addCase(LIVE_ORDER_FEED_WS_ERROR, (state:any, action:any) => {
//       state.connectionError = action.payload;
//     })
//     .addCase(LIVE_ORDER_FEED_WS_MESSAGE, (state:any, action:any) => {
//       state.table = action.payload;
//     });
// });

export const liveOrderFeedReducer = (
  state = initialState,
  action: TWSActions
): TWSListState => {
  switch (action.type) {
    case LIVE_ORDER_FEED_WS_CONNECTING: {
      return {
        ...state,
        status: WebsocketStatus.CONNECTING,
      };
    }
    case LIVE_ORDER_FEED_WS_OPEN: {
      return {
        ...state,
        status: WebsocketStatus.ONLINE,
        connectionError: "",
      };
    }
    case LIVE_ORDER_FEED_WS_CLOSE: {
      return {
        ...state,
        status: WebsocketStatus.OFFLINE,
        connectionError: "",
      };
    }

    case LIVE_ORDER_FEED_WS_ERROR: {
      return {
        ...state,
        connectionError: action.payload,
      };
    }

    case LIVE_ORDER_FEED_WS_MESSAGE: {
      return {
        ...state,
        table: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
