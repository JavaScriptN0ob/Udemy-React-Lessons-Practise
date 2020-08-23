import React from 'react';

import styles from './CartDropdown.module.scss';

import CustomButton from '../../CustomButton';

function CartDropdown() {
  return (
    <div className={styles.cart_dropdown}>
      <div className={styles.cart_items} />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown;