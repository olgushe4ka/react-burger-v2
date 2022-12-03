import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import { compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./components/app/app.jsx";



const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = configureStore({ reducer: rootReducer }, enhancer);

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
