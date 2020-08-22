import React from 'react';

import styles from './SignInAndSignUp.module.scss';

import SignIn from './SignIn';
import SignUp from './SignUp';

function SignInAndSignUp() {
  return (
    <div className={styles.sign_in_and_sign_up}>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUp;