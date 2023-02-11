import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import { applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { burgersMiddleware, rootReducer } from "./services/reducers";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app/app";
import { AppThunk } from "./types/index";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(burgersMiddleware),
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [applyMiddleware(thunk)],
});

//const enhancer = applyMiddleware(thunk);

// export const store = configureStore(
//   {
//     reducer: rootReducer,
//     middleware: (getDafaultMiddleware) => {
//       return getDafaultMiddleware().concat(burgersMiddleware);
//     },
//   },
//   enhancer
// );

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    {/* <React.StrictMode> */}
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    {/* </React.StrictMode> */}
  </>
);

reportWebVitals();
