import { CartActionTypes } from './type';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
})

// export const setCartHiddenTrue = () => ({
//   type: CartActionTypes.SET_CART_HIDDEN_TRUE,
//   payload: true,
// })

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
})

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
})

export const increaseItem = (item) => ({
  type: CartActionTypes.INCREASE_ITEM,
  payload: item,
})