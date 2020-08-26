import { CartActionTypes } from './type';

import { addItemToCart, removeItemFromCart, increaseExistCartItem } from './utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    
    // case CartActionTypes.SET_CART_HIDDEN_TRUE:
    //   return {
    //     ...state,
    //     hidden: action.payload,
    //   }

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      }

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      }

    case CartActionTypes.INCREASE_ITEM:
      return {
        ...state,
        cartItems: increaseExistCartItem(state.cartItems, action.payload),
      }

    default:
      return state;
  }
}

export default cartReducer;