import React from 'react';

import styles from './SignInAndSignOut.module.scss';

import SignIn from './SignIn';

function SignInAndSignOut() {
  return (
    <div className={styles.sign_in_and_sign_up}>
      <SignIn />
    </div>
  )
}

export default SignInAndSignOut;