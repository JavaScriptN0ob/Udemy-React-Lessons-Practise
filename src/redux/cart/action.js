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