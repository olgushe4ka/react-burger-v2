import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import { compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { burgersMiddleware, rootReducer } from "./services/reducers";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app/app.jsx";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDafaultMiddleware) => {
      return getDafaultMiddleware().concat(burgersMiddleware);
    },
  },
  enhancer
);

const root = ReactDOM.createRoot(document.getElementById("root"));
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
