import "./signin.styles.scss";
import React, { Component } from "react";
import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/custom-Button.component'
import { auth, signInWithGoogle } from '../../firebase/firebasae.utils'


class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async  (event) => {
    event.preventDefault();
    const { email , password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email , password)
      this.setState({ email: "", password: "" });
    } catch(err) {
      console.log("Something went wrong", err)
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already have an Account </h2>
        <span>Sign in with your email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>  Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
