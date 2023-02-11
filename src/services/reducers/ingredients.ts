import { TIingredient } from "../../types/ingredients";
import {
  GET_ORDER_DETAILS_FAILED,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  CONSTRUCTOR_ADD_INGREDIENTS,
  CONSTRUCTOR_DELETE_INGREDIENTS,
  RESET_INGREDIENT_MODAL,
  SET_INGREDIENT_MODAL,
  CONSTRUCTOR_SORT_INGREDIENTS,
  CONSTRUCTOR_REMOVE_INGREDIENTS,
  TIngredientsActions,
} from "../actions/ingredients";

type TOrderDetails = {
  success: boolean;
  name: string;
  _id: string;
  order: {
    ingredients: [];
    owner: {};
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    price: number;
  };
};

type TIngredientsListState = {
  ingredients: Array<any>;
  ingredientsIsLoading: boolean;
  ingredientsFailed: boolean;

  cartBun: Array<any>;

  cartIng: any;

  ingredientDetails: TIingredient | null;

  orderDetails:TOrderDetails | null ;
  orderDetailsIsLoading: boolean;
  orderDetailsFailed: boolean;
};

const initialState: TIngredientsListState = {
  ingredients: [],
  ingredientsIsLoading: false,
  ingredientsFailed: false,

  cartBun: [],

  cartIng: [],

  ingredientDetails: null,

  orderDetails: null,
  orderDetailsIsLoading: false,
  orderDetailsFailed: false,
};

export const ingredientsReducer = (
  state = initialState,
  action: TIngredientsActions
): TIngredientsListState => {
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
      if (action.payload.item.type !== "bun") {
        return {
          ...state,
          cartIng: state.cartIng.concat({
            ...action.payload.item,
            id: action.payload.keyId,
          }),
        };
      } else {
        return {
          ...state,
          cartBun: [action.payload.item],
        };
      }
    }

    case CONSTRUCTOR_DELETE_INGREDIENTS: {
      const ingredientsClone = [...state.cartIng];
      ingredientsClone.splice(action.payload.index, 1);

      return {
        ...state,
        cartIng: ingredientsClone,
      };
    }

    case CONSTRUCTOR_SORT_INGREDIENTS: {
      const dragItem = state.cartIng[action.payload.dragIndex];
      const hoverItem = state.cartIng[action.payload.hoverIndex];

      const sortIngredients = [...state.cartIng];

      sortIngredients[action.payload.dragIndex] = hoverItem;
      sortIngredients[action.payload.hoverIndex] = dragItem;

      return {
        ...state,
        cartIng: sortIngredients,
      };
    }

    case CONSTRUCTOR_REMOVE_INGREDIENTS: {
      return {
        ...state,
        cartIng: [],
        cartBun: [],
      };
    }

    default: {
      return state;
    }
  }
};
