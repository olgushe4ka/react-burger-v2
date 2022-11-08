import { getIngredients, saveOrder } from "../../utils/burger-api";

export const GET_ORDER_DETAILS_FAILED = "GET_ORDER_DETAILS_FAILED";
export const GET_ORDER_DETAILS_REQUEST = "GET_ORDER_DETAILS_REQUEST";
export const GET_ORDER_DETAILS_SUCCESS = "GET_ORDER_DETAILS_SUCCESS";

export const GET_INGREDIENT_DETAILS_FAILED = "GET_INGREDIENT_DETAILS_FAILED";
export const GET_INGREDIENT_DETAILS_REQUEST = "GET_INGREDIENT_DETAILS_REQUEST";
export const GET_INGREDIENT_DETAILS_SUCCESS = "GET_INGREDIENT_DETAILS_SUCCESS";

export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_ITEMS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_ITEMS_SUCCESS";

export const CONSTRUCTOR_ADD_INGREDIENTS = "CONSTRUCTOR_ADD_INGREDIENTS";
export const CONSTRUCTOR_DELETE_INGREDIENTS = "CONSTRUCTOR_DELETE_INGREDIENTS";
export const CONSTRUCTOR_RESET = "CONSTRUCTOR_RESET";
export const CONSTRUCTOR_REORDER = "CONSTRUCTOR_REORDER";

export const RESET_INGREDIENT_MODAL = "RESET_INGREDIENT_MODAL";
export const SET_INGREDIENT_MODAL = "SET_INGREDIENT_MODAL";

export const TAKE_ORDER_NUMBER = "SET_ORDER_NUMBER";

export function getItems() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getIngredients().then((res) => {
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
    });
  };
}

export function orderBurger(orderData) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_DETAILS_REQUEST,
    });
    saveOrder(orderData).then((res) => {
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
    });
  };
}