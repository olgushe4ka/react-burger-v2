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
    SET_INGREDIENT_MODAL,

    TAKE_ORDER_NUMBER

  } from '../actions/ingredients';
  


  const initialState = {
    ingredients: [],
    ingredientsIsLoading: false,
    ingredientsFailed: false,  
    

    cart: [  {
      _id: "60d3b41abdacab0026a733cb",
      name: "Сыр с астероидной плесенью",
      type: "main",
      proteins: 84,
      fat: 48,
      carbohydrates: 420,
      calories: 3377,
      price: 4142,
      image: "https://code.s3.yandex.net/react/code/cheese.png",
      image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
      __v: 0,
    },
    {
      _id: "60d3b41abdacab0026a733c6",
      name: "Флюоресцентная булка R2-D3",
      type: "bun",
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: "https://code.s3.yandex.net/react/code/bun-01.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
      __v: 0,
    },],

    ingredientDetails: null,

    orderDetails: null,
    orderDetailsIsLoading: false,
    orderDetailsFailed: false,  


  };



  export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ORDER_DETAILS_REQUEST: {
        return {
          ...state,
          orderDetailsIsLoading: true
        };
      }
      case GET_ORDER_DETAILS_SUCCESS: {
        return { ...state, orderDetailsFailed: false, orderDetails: action.items, orderDetailsIsLoading: false };
      }
      case GET_ORDER_DETAILS_FAILED: {
        return { ...state, orderDetailsFailed: true, orderDetailsIsLoading: false };
      }


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
  
      case SET_INGREDIENT_MODAL: {
        return {
          ...state, ingredientDetails: action.payload,
        }
      }

      case RESET_INGREDIENT_MODAL: {
        return {
          ...state, ingredientDetails: null,
        }
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