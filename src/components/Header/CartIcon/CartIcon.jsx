import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../../redux/cart/action';
import { selectCartItemsCount } from '../../../redux/cart/selector';

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

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);