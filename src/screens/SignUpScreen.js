import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";

function SignInScreen() {
  // reference to the html fields in our sign in
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // prevent a refresh when user clicks sign up
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // prevent a refresh when user clicks sign in
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
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
