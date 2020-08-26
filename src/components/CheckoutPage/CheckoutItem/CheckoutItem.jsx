import React from 'react';

import styles from './CheckoutItem.module.scss';

function CheckoutItem({ cartItem: { name, imageUrl, price, quantity } }) {
  return (
    <div className={styles.checkout_item}>
      <div className={styles.image_container}>
        <img src={imageUrl} alt="item"/>
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>{quantity}</span>
      <span className={styles.price}>{price}</span>
      <div className={styles.remove_button}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;