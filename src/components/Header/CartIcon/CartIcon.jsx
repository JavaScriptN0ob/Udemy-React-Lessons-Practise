import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../../redux/cart/action';

import styles from './CartIcon.module.scss';

function CartIcon({ toggleCartHidden }) {
  return (
    <div className={styles.cart_icon} onClick={toggleCartHidden} >
      <ShoppingIcon className={styles.shopping_icon} />
      <span className={styles.item_count}>0</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);