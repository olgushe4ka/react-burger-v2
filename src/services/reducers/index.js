import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';




// const stepReducer = (state = 'cart', action) => {
//   switch (action.type) {
//     case NEXT_STEP: {
//       return state === 'cart'
//         ? 'delivery'
//         : state === 'delivery'
//         ? 'checkout'
//         : state === 'checkout'
//         ? 'checkout'
//         : 'checkout';
//     }
//     case PREVIOUS_STEP: {
//       return state === 'cart'
//         ? 'cart'
//         : state === 'delivery'
//         ? 'cart'
//         : state === 'checkout'
//         ? 'delivery'
//         : 'cart';
//     }
//     default: {
//       return state;
//     }
//   }
// };


export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
 //   cart: cartReducer,
});