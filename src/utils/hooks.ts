import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { AppDispatch, AppThunk, RootState } from "../types/index";

//export const useDispatch = () => dispatchHook< AppDispatch | AppThunk >();

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const useDispatch = () => dispatchHook<AppDispatch>();

// // hooks.ts
// import {
//     TypedUseSelectorHook,
//     useDispatch as dispatchHook,
//     useSelector as selectorHook
//   } from 'react-redux';
//   import { AppDispatch, AppThunk, RootState } from './types';

//   // Теперь этот хук знает структуру хранилища
//   export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

//   // Хук не даст отправить экшен, который ему не знаком
//   export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();

//   // hooks.ts
// import {
//     TypedUseSelectorHook,
//     useSelector as selectorHook
//   } from 'react-redux';
//   import { RootState } from './types';

//   // Теперь этот хук знает структуру хранилища
//   export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
