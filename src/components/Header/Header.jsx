import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils/firebase';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import styles from './Header.module.scss';

function Header({ currentUser }) {
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
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header);