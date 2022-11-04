import {
    GET_ORDER_DETAILS_FAILED,
    GET_ORDER_DETAILS_REQUEST,
    GET_ORDER_DETAILS_SUCCESS,


    GET_INGREDIENT_DETAILS_FAILED,
    GET_INGREDIENT_DETAILS_REQUEST,
    GET_INGREDIENT_DETAILS_SUCCESS,

    
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,


    CONSTRUCTOR_ADD_INGREDIENTS,
    CONSTRUCTOR_DELETE_INGREDIENTS,
    CONSTRUCTOR_RESET,
    CONSTRUCTOR_REORDER,

    RESET_INGREDIENT_MODAL, 
    SET_INGREDIENT_MODAL

  } from '../actions/ingredients';
  


  const initialState = {
    ingredients: [],
    ingredientsIsLoading: false,
    ingredientsFailed: false,  
    

    constructor: [],

    ingredientDetails: [],

    orderDetails: [],
    orderDetailsIsLoading: false,
    orderDetailsFailed: false,  


  };



  export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_INGREDIENTS_REQUEST: {
        return {
          ...state,
          ingredientsIsLoading: true
        };
      }
      case GET_INGREDIENTS_SUCCESS: {
        return { ...state, ingredientsFailed: false, ingredients: action.items, ingredientsIsLoading: false };
      }
      case GET_INGREDIENTS_FAILED: {
        return { ...state, ingredientsFailed: true, ingredientsIsLoading: false };
      }
  


      // case GET_RECOMMENDED_ITEMS_REQUEST: {
      //   return {
      //     ...state,
      //     recommendedItemsRequest: true
      //   };
      // }
      // case GET_RECOMMENDED_ITEMS_SUCCESS: {
      //   return {
      //     ...state,
      //     recommendedItemsFailed: false,
      //     recommendedItems: action.items,
      //     recommendedItemsRequest: false
      //   };
      // }
      // case GET_RECOMMENDED_ITEMS_FAILED: {
      //   return { ...state, recommendedItemsFailed: true, recommendedItemsRequest: false };
      // }
  
      // case TAB_SWITCH: {
      //   return {
      //     ...state,
      //     currentTab: state.currentTab === 'items' ? 'postponed' : 'items'
      //   };
      // }
      // case INCREASE_ITEM: {
      //   return {
      //     ...state,
      //     items: [...state.items].map(item =>
      //       item.id === action.id ? { ...item, qty: ++item.qty } : item
      //     )
      //   };
      // }
      // case DECREASE_ITEM: {
      //   return {
      //     ...state,
      //     items: [...state.items].map(item =>
      //       item.id === action.id ? { ...item, qty: --item.qty } : item
      //     )
      //   };
      // }
      // case DELETE_ITEM: {
      //   return { ...state, items: [...state.items].filter(item => item.id !== action.id) };
      // }
      // case APPLY_PROMO_FAILED: {
      //   return {
      //     ...state,
      //     promoRequest: false,
      //     promoFailed: true,
      //     promoDiscount: null,
      //     promoCode: ''
      //   };
      // }
      // case APPLY_PROMO_REQUEST: {
      //   return {
      //     ...state,
      //     promoFailed: false,
      //     promoRequest: true
      //   };
      // }
      // case APPLY_PROMO_SUCCESS: {
      //   return {
      //     ...state,
      //     promoRequest: false,
      //     promoCode: action.value.code,
      //     promoDiscount: action.value.discount
      //   };
      // }
      // case CANCEL_PROMO: {
      //   return {
      //     ...state,
      //     promoCode: '',
      //     promoDiscount: null
      //   };
      // }
      default: {
        return state;
      }
    }
  };