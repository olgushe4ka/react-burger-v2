import { AppDispatch } from "../../types";
import { TOrders } from "../../types/ingredients";
import { getIngredients, saveOrder } from "../../utils/burger-api";

export const GET_ORDER_DETAILS_FAILED: "GET_ORDER_DETAILS_FAILED" =
  "GET_ORDER_DETAILS_FAILED";
export const GET_ORDER_DETAILS_REQUEST: "GET_ORDER_DETAILS_REQUEST" =
  "GET_ORDER_DETAILS_REQUEST";
export const GET_ORDER_DETAILS_SUCCESS: "GET_ORDER_DETAILS_SUCCESS" =
  "GET_ORDER_DETAILS_SUCCESS";

export const GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED" =
  "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_ITEMS_REQUEST" =
  "GET_INGREDIENTS_ITEMS_REQUEST";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_ITEMS_SUCCESS" =
  "GET_INGREDIENTS_ITEMS_SUCCESS";

export const CONSTRUCTOR_ADD_INGREDIENTS: "CONSTRUCTOR_ADD_INGREDIENTS" =
  "CONSTRUCTOR_ADD_INGREDIENTS";
export const CONSTRUCTOR_DELETE_INGREDIENTS: "CONSTRUCTOR_DELETE_INGREDIENTS" =
  "CONSTRUCTOR_DELETE_INGREDIENTS";

export const CONSTRUCTOR_SORT_INGREDIENTS: "CONSTRUCTOR_SORT_INGREDIENTS" =
  "CONSTRUCTOR_SORT_INGREDIENTS";
export const CONSTRUCTOR_REMOVE_INGREDIENTS: "CONSTRUCTOR_REMOVE_INGREDIENTS" =
  "CONSTRUCTOR_REMOVE_INGREDIENTS";

export const RESET_INGREDIENT_MODAL: "RESET_INGREDIENT_MODAL" =
  "RESET_INGREDIENT_MODAL";
export const SET_INGREDIENT_MODAL: "SET_INGREDIENT_MODAL" =
  "SET_INGREDIENT_MODAL";

// Типизация экшенов

export interface IGetOrderDetailsAction {
  readonly type: typeof GET_ORDER_DETAILS_REQUEST;
}
export interface IGetOrderDetailsSuccessAction {
  readonly type: typeof GET_ORDER_DETAILS_SUCCESS;
  readonly items: any;
}
export interface IGetOrderDetailsFailedAction {
  readonly type: typeof GET_ORDER_DETAILS_FAILED;
}

export interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly items: any;
}
export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface IConsrtuctorAddIngredientAction {
  readonly type: typeof CONSTRUCTOR_ADD_INGREDIENTS;
  readonly payload: any;
}
export interface IConsrtuctorDeleteIngredientAction {
  readonly type: typeof CONSTRUCTOR_DELETE_INGREDIENTS;
  readonly payload: any;
}
export interface IConsrtuctorSortIngredientAction {
  readonly type: typeof CONSTRUCTOR_SORT_INGREDIENTS;
  readonly payload: any;
}

export interface IConsrtuctorRemoveIngredientAction {
  readonly type: typeof CONSTRUCTOR_REMOVE_INGREDIENTS;
}

export interface IResetIngredientModalAction {
  readonly type: typeof RESET_INGREDIENT_MODAL;
}

export interface ISetIngredientModalAction {
  readonly type: typeof SET_INGREDIENT_MODAL;
  readonly payload: any;
}

// Объединяем в Union
export type TIngredientsActions =
  | IGetOrderDetailsAction
  | IGetOrderDetailsSuccessAction
  | IGetOrderDetailsFailedAction
  | IGetIngredientsAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | IConsrtuctorAddIngredientAction
  | IConsrtuctorDeleteIngredientAction
  | IConsrtuctorSortIngredientAction
  | IConsrtuctorRemoveIngredientAction
  | IResetIngredientModalAction
  | ISetIngredientModalAction;

// Генераторы экшенов

export function getItems() {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getIngredients()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            items: res.data,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function orderBurger(orderData: {}) {
  return function (dispatch: AppDispatch) {
    console.log(orderData);
    dispatch({
      type: GET_ORDER_DETAILS_REQUEST,
    });
    saveOrder(orderData)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_DETAILS_SUCCESS,
            items: res,
          });
        } else {
          dispatch({
            type: GET_ORDER_DETAILS_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
