import React from 'react';


import styles from './CartItem.module.scss';

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <div className={styles.cart_item}>
      <img src={imageUrl} alt="item" />
      <div className={styles.item_details}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  )
}


export default CartItem;