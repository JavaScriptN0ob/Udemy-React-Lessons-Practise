import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import styles from './Header.module.scss';

function Header() {
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
      </div>
    </div>
  )
}

export default Header;