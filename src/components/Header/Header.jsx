import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils/firebase';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import styles from './Header.module.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { selectCartHidden } from '../../redux/cart/selector';
import { selectCurrentUser} from '../../redux/user/selector';

function Header({ currentUser, hidden }) {
  return (
    <div className={styles.header}>
      <Link className={styles.logo_container} to="/">
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.options}>
        <Link className={styles.option} to="/shop">
          SHOP
        </Link>
        <Link className={styles.option} to="/shop">
          CONTACT
        </Link>
        {
          currentUser ? (
          <div className={styles.option} onClick={() => {auth.signOut()}}>SIGN OUT</div>
          )  :  (
          <Link className={styles.option} to="/signin">SIGN IN</Link>
          )
        }
        <CartIcon />
      </div>
      {
        hidden ? (
          null
        ) : (
          <CartDropdown />
        )
      }  
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);