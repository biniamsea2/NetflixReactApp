import React from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import "./SignUpScreen.css";

function SignInScreen() {
  // prevent a refresh when user clicks sign up
  const register = (e) => {
    e.preventDefault();
  };
  // prevent a refresh when user clicks sign in
  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" Style="color:white;" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen_gray">New to Netflix? </span>
          <span className="signUpScreen_link" onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
