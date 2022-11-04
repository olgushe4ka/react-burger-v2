import { getIngredients, saveOrder } from "../../utils/burger-api";


export const GET_ORDER_DETAILS_FAILED = 'GET_ORDER_DETAILS_FAILED';
export const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_DETAILS_REQUEST';
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';

export const GET_INGREDIENT_DETAILS_FAILED = 'GET_INGREDIENT_DETAILS_FAILED';
export const GET_INGREDIENT_DETAILS_REQUEST = 'GET_INGREDIENT_DETAILS_REQUEST';
export const GET_INGREDIENT_DETAILS_SUCCESS = 'GET_INGREDIENT_DETAILS_SUCCESS';

export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_ITEMS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_ITEMS_SUCCESS';

export const CONSTRUCTOR_ADD_INGREDIENTS = 'CONSTRUCTOR_ADD_INGREDIENTS';
export const CONSTRUCTOR_DELETE_INGREDIENTS = 'CONSTRUCTOR_DELETE_INGREDIENTS';
export const CONSTRUCTOR_RESET = 'CONSTRUCTOR_RESET';
export const CONSTRUCTOR_REORDER = 'CONSTRUCTOR_REORDER';

export const RESET_INGREDIENT_MODAL = 'RESET_INGREDIENT_MODAL';
export const SET_INGREDIENT_MODAL = 'SET_INGREDIENT_MODAL';



// export function applyPromo(code) {
//   return function(dispatch) {
//     dispatch({
//       type: APPLY_PROMO_REQUEST
//     });
//     applyPromoCodeRequest(code).then(res => {
//       if (res && res.success) {
//         dispatch({
//           type: APPLY_PROMO_SUCCESS,
//           value: { ...res, code }
//         });
//       } else {
//         dispatch({
//           type: APPLY_PROMO_FAILED
//         });
//       }
//     });
//   };
// }

export function getItems() {
  return function(dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    });
    getIngredients().then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          items: res.data
        });
      } else {
        dispatch({
          type: GET_INGREDIENTS_FAILED
        });
      }
    });
  };
}



export const orderBurger = (orderData) => (dispatch) => {
    dispatch({
      type: GET_ORDER_DETAILS_REQUEST,
    });
    return saveOrder(orderData)
      .then((res) => {
        dispatch({
          type: GET_ORDER_DETAILS_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_DETAILS_FAILED,
          payload: err,
        });
      });
  };


// export function getRecommendedItems() {
//   return function(dispatch) {
//     dispatch({
//       type: GET_RECOMMENDED_ITEMS_REQUEST
//     });
//     getRecommendedItemsRequest().then(res => {
//       if (res && res.success) {
//         dispatch({
//           type: GET_RECOMMENDED_ITEMS_SUCCESS,
//           items: res.data
//         });
//       } else {
//         dispatch({
//           type: GET_RECOMMENDED_ITEMS_FAILED
//         });
//       }
//     });
//   };
// }