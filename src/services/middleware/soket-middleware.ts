import { Middleware } from "redux";
import { RootState } from "../../types";
import { TWSActions } from "../actions/web-soket";

import { TWSListState } from "../reducers/web-soket";

export type TWSActions2 = {
  wsConnect: any;
  wsDisconnect: any;
  wsConnecting: any;
  onOpen: any;
  onClose: any;
  onError: any;
  onMessage: any;
};

export const socketMiddleware = (wsActions: TWSActions2):Middleware<{}, RootState> => {
  return (store: any) => {
    let socket: any = null;
    let isConnected: boolean = false;
    let reconnectTimer: number = 0;
    let url: string = "";

    return (next: any) => (action: any) => {
      const { dispatch }: any = store;
      const { type, payload } = action;

      const {
        wsConnect,
        wsDisconnect,
        wsConnecting,
        onOpen,
        onClose,
        onError,
        onMessage,
      } = wsActions;

      if (type === wsConnect.type) {
        url = action.payload;
        socket = new WebSocket(url);
        isConnected = true;
        dispatch(wsConnecting());
      }

      if (socket) {
        socket.onopen = () => {
          dispatch(onOpen());
        };

        socket.onerror = (event: any) => {
          console.log("socket.onerror", event);
        };

        socket.onclose = (event: any) => {
          if (event.code !== 1000) {
            console.log("socket.onclose", event);
            dispatch(onError(event.code.toString()));
          }

          dispatch(onClose(event.code.toString()));

          if (isConnected) {
            dispatch(wsConnecting());
            reconnectTimer = window.setTimeout(() => {
              dispatch(wsConnect(url));
            }, 3000);
          }
        };

        socket.onmessage = (event: any) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch(onMessage(parsedData));
        };

        if (wsDisconnect.match(action)) {
          isConnected = false;
          clearTimeout(reconnectTimer);
          reconnectTimer = 0;

          socket.close(1000, "Работа приложения закончена");
        }
      }

      next(action);
    };
  };
};
