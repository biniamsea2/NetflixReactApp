import React from "react";
import "./SignUpScreen.css";

function SignInScreen() {
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" Style="color:white;" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signUpScreen_gray">New to Netflix? </span>
          <span className="signUpScreen_link">Sign Up Now</span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
