import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  const user = null;

  // listener that listens to any auth state change (user logged in or not)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        console.log(userAuth);
      } else {
        // logged out
      }
    });
    // detach the old listener and attach a new one
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
            {/* only render homescreen if its the exact path */}
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
