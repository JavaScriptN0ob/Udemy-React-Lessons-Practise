import React from 'react';

import styles from './SignIn.module.scss';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';


class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      email: '',
      password: '',
    })
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className={styles.sign_in}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email} 
            handleChange={this.handleChange}
            label="email"
            required 
          />
          
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            label="password"
            required 
          />

          <CustomButton type="submit" value="Submit Form"> Sign In </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;