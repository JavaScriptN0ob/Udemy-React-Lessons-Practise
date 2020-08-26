import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from './Checkout.module.scss';

import CheckoutHeader from './CheckoutHeader';
import CheckoutItem from './CheckoutItem';
import { selectCartItems, selectCartTotal } from '../../redux/cart/selector';

function CheckoutPage ({ cartItems, total, }) {
  return (
    <div className={styles.checkout_page}>
      <div className={styles.checkout_header}>
        <CheckoutHeader className={styles.header_block}>
          Product
        </CheckoutHeader>
        <CheckoutHeader className={styles.header_block}>
          Description
        </CheckoutHeader>
        <CheckoutHeader className={styles.header_block}>
          Quantity
        </CheckoutHeader>
        <CheckoutHeader className={styles.header_block}>
          Price
        </CheckoutHeader>
        <CheckoutHeader className={styles.header_block}>
          Remove
        </CheckoutHeader>
      </div>
      {
        cartItems.map((cartItem) => 
          <CheckoutItem 
            key={cartItem.id} 
            cartItem={cartItem} 
          />
        )
      }
      <div className={styles.total}>
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage);