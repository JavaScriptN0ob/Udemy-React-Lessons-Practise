import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import styles from './CartDropdown.module.scss';

import CustomButton from '../../CustomButton';
import CartItem from './CartItem';
import { selectCartItems } from '../../../redux/cart/selector';
import { toggleCartHidden } from '../../../redux/cart/action';

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className={styles.cart_dropdown}>
      <div className={styles.cart_items}>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
                      <CartItem 
                        key={cartItem.id}
                        item={cartItem} 
                      />
                    ))
        ) : (
          <span className={styles.empty_message}>Your cart is empty</span>
        )}
      </div>
      <CustomButton 
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// const mapDispatchToProps = (dispatch) => ({
//   CartDropdownHidden: () => dispatch(toggleCartHidden()),
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));