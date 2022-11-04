import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";

import reportWebVitals from "./reportWebVitals";


import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'



const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = configureStore({ reducer: rootReducer }, enhancer);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 // <React.StrictMode>
 <Provider store={store}>  
 <App />
 </Provider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


