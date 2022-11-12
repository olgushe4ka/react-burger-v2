import { isTemplateSpan } from "typescript";
import { cart } from "../../utils/data";
import {
  GET_ORDER_DETAILS_FAILED,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  CONSTRUCTOR_ADD_INGREDIENTS,
  CONSTRUCTOR_DELETE_INGREDIENTS,
  CONSTRUCTOR_RESET,
  CONSTRUCTOR_REORDER,
  RESET_INGREDIENT_MODAL,
  SET_INGREDIENT_MODAL,
  TAKE_ORDER_NUMBER,
  CONSTRUCTOR_ONLY_ONE_BUN_IN_ARRAY,
  CONSTRUCTOR_ADD_BUNS,
  CONSTRUCTOR_SORT_INGREDIENTS,
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  ingredientsIsLoading: false,
  ingredientsFailed: false,

  cartBun: [ ],

  cartIng: [],

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
        orderDetailsIsLoading: true,
      };
    }
    case GET_ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        orderDetailsFailed: false,
        orderDetails: action.items,
        orderDetailsIsLoading: false,
      };
    }
    case GET_ORDER_DETAILS_FAILED: {

      return {
        ...state,
        orderDetailsFailed: true,
        orderDetailsIsLoading: false,
      };
    }

    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsIsLoading: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsFailed: false,
        ingredients: action.items,
        ingredientsIsLoading: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
           return { ...state, ingredientsFailed: true, ingredientsIsLoading: false };
    }

    case SET_INGREDIENT_MODAL: {
      return {
        ...state,
        ingredientDetails: action.payload,
      };
    }

    case RESET_INGREDIENT_MODAL: {
      return {
        ...state,
        ingredientDetails: null,
      };
    }

    case CONSTRUCTOR_ADD_INGREDIENTS: {
const type = action.items.item.type

if (type !=='bun' )
      return {
        ...state,
        cartIng: [...state.cartIng, action.items.item],
      };
      else return {
        ...state,
        cartBun: [state.cartBun, action.items.item],
      }
    }


    // case CONSTRUCTOR_ADD_INGREDIENTS: {
    //   return {
    //     ...state,
    //     cart: [...state.cart, action.items.item],
    //   };
    // }

    case CONSTRUCTOR_SORT_INGREDIENTS: {
      const dragItem = state.cart[action.payload.dragIndex];
      const hoverItem = state.cart[action.payload.hoverIndex];

      const sortIngredients = [...state.cart];

      sortIngredients[action.payload.dragIndex] = hoverItem;
      sortIngredients[action.payload.hoverIndex] = dragItem;

      console.log(state.cart);

      console.log(dragItem);
      console.log(hoverItem);

      return {
        ...state,
        cart: sortIngredients,
      };
    }

    default: {
      return state;
    }
  }
};
