export const socketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;
    let isConnected = false;
    let reconnectTimer = 0;
    let url = '';



    return (next) => (action) => {
      const { dispatch } = store;
        const {type, payload} = action;
      const {
        wsConnect,
        wsDisconnect,
        wsConnecting,
        onOpen,
        onClose,
        onError,
        onMessage,
      } = wsActions;


      if (type === "LIVE_ORDER_FEED_CONNECT") {
        url = action.payload;
        socket = new WebSocket(url);
        isConnected = true;
        dispatch(wsConnecting());
      }

      if (socket) {
        socket.onopen = () => {
          dispatch(onOpen());
        };

        socket.onerror = (event) => {
          console.log('socket.onerror', event);
        };

        socket.onclose = (event) => {
          if (event.code !== 1000) {
            console.log('socket.onclose', event);
            dispatch(onError(event.code.toString()))
          }

          dispatch(onClose(event.code.toString()));

          if(isConnected){
            dispatch(wsConnecting())
            reconnectTimer = window.setTimeout(() => {
                dispatch(wsConnect(url))
            }, 3000)
          }

        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch(onMessage(parsedData));
        };

        if (wsDisconnect.match(action)) {
          isConnected = false;
          clearTimeout(reconnectTimer);
          reconnectTimer = 0;

          socket.close(1000, 'Работа приложения закончена');

        }
      }

      next(action);
    };
  };
};
