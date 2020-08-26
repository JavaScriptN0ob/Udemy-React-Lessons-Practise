export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => 
      cartItem.id === cartItemToAdd.id
  )

  if (!existingCartItem) {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  }

  return cartItems.map((cartItem) => (
    cartItem.id === cartItemToAdd.id ? (
      {...cartItem, quantity: cartItem.quantity + 1,}
    ) : (
      cartItem
    )
  ))
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const cartItemToRemoveIsLastOne = cartItems.find(
    (cartItem) =>
      cartItem.id === cartItemToRemove.id && cartItemToRemove.quantity === 1,
  )

  if (!cartItemToRemoveIsLastOne) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id ? (
        {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      ) : (
        cartItem
      )
    );
  };

  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
}

export const increaseExistCartItem = (cartItems, cartItemToIncrease) => {
  return cartItems.map((cartItem) => 
    cartItem.id === cartItemToIncrease.id ? (
      {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      }
    ) : (
      cartItem
    )
  )
}