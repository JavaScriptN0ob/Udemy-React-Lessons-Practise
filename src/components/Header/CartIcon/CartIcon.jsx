import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../../redux/cart/action';

import styles from './CartIcon.module.scss';

function CartIcon({ itemCount , toggleCartHidden }) {
  return (
    <div className={styles.cart_icon} onClick={toggleCartHidden} >
      <ShoppingIcon className={styles.shopping_icon} />
      <span className={styles.item_count}>
        {itemCount}
      </span>
    </div>
  )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumalatedQuantity, cartItem) => (
      accumalatedQuantity + cartItem.quantity
    ), 0
  )
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);