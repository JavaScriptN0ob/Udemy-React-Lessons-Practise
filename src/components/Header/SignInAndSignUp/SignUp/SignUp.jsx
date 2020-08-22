import React from 'react';
import FormInput from '../../../FormInput';
import CustomButton from '../../../CustomButton';

import { auth, createUserProfileDocument } from '../../../../firebase/utils/firebase';

import styles from './SignUp.module.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch(error) {
      console.log(error)
    }
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value, 
    })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className={styles.sign_up}>
        <h2 className={styles.title}>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className={styles.sign_up_form} onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;