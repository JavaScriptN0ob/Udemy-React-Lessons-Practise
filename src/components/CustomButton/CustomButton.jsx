import React from 'react';
import classNames from 'classnames/bind';

import styles from './CustomButton.module.scss';

const cx = classNames.bind(styles);

function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) {
  return (
    <button 
      className={cx({
        custom_button: true,
        inverted: inverted,
        google_sign_in: isGoogleSignIn,
      })} 
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton;