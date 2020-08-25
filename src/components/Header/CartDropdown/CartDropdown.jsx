import React from 'react';
import { connect } from 'react-redux';

import styles from './CartDropdown.module.scss';

import CustomButton from '../../CustomButton';
import CartItem from './CartItem';

function CartDropdown({ cartItems }) {
  return (
    <div className={styles.cart_dropdown}>
      <div className={styles.cart_items}>
        {
          cartItems.map((cartItem) => (
            <CartItem 
              key={cartItem.id}
              item={cartItem} 
            />
          ))
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
})

export default connect(mapStateToProps)(CartDropdown);