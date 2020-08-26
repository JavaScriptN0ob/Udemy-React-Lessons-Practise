import React from 'react';
import { connect } from 'react-redux';

import styles from './CheckoutItem.module.scss';
 
import { clearItemFromCart, removeItem, increaseItem } from '../../../redux/cart/action';

function CheckoutItem({ 
  cartItem,
  clearItem, 
  removeItem,
  increaseItem,
}) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className={styles.checkout_item}>
      <div className={styles.image_container}>
        <img src={imageUrl} alt="item"/>
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div 
          className={styles.arrow}
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </div>
        <span className={styles.value}>{quantity}</span>
        <div 
          className={styles.arrow}
          onClick={() => {increaseItem(cartItem)}}
        >
          &#10095;
        </div>
      </span>
      <span className={styles.price}>${price}</span>
      <div 
        className={styles.remove_button}
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  increaseItem: (item) => dispatch(increaseItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);