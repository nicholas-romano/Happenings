import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import SignupForm from "./pages/Auth/SignupForm";
import AUTH from "./utils/AUTH";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import Feed from "./pages/Feed";
import Review from "./components/Review";
import Landing from "./pages/MainPages/Landing";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact/Contact";
import Friends from "./pages/Friends/Friends";

// EXS 16th July 2020 - Added in bulma calls
import "react-bulma-components/dist/react-bulma-components.min.css";
import "./App.css";

function App() {

  const styles = {
    twothirds: {
      paddingBottom: 10,
      backgroundColor: "rgba(183, 209, 218, 1)",
    },
    onethird: {
      backgroundColor: "rgba(163, 124, 64, 1)",
    },
    back: {
      backgroundColor: "rgba(42, 45, 52, 1)",
    },
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loginErr, setLoginErr] = useState('');

  const history = useHistory();
  console.log("history:", history);
  console.log("loggedIn: ", loggedIn);
  useEffect(() => {
    AUTH.getUser().then((response) => {
      console.log("response:", response);
      // console.log(response.data);
      if (response.data.user) {
        setLoggedIn(true);
        setUser(response.data.user);
        // history.push('/feed');
      } else {
        setLoggedIn(false);
        setUser(null);
      }
    });
    return () => {
      setLoggedIn(false);
      setUser(null);
    };
  }, []);
  const logout = (event) => {
    event.preventDefault();
    AUTH.logout().then((response) => {
      // console.log(response.data);
      if (response.status === 200) {
        setLoggedIn(false);
        setUser(null);
        history.push("/");
      }
    });
  };
  // EXS 27th July possible conflict, commented out next two lines
  //  const login = (username, password) => {
  //    AUTH.login(username, password).then((response) => {
  const login = (userData) => {
    AUTH.login(userData).then((response) => {
      console.log("Our user has logged in:", response.data);
      if (response.status === 200) {
        // update the state
        setLoggedIn(true);
        setUser(response.data.user);
        history.push("/feed");
      }
    }).catch(err => {
      console.log("err: ", err);
      setLoginErr('Invalid username and password combination.')
    });
  };
  console.log("loggedIn!!!:", loggedIn);
  return (
    <div className="App" style={styles.back}>
      <div className="columns is-gapless is-desktop">
        <div className="column is-full" style={styles.twothirds}>
          {loggedIn && (
            <div>
              <Nav user={user} logout={logout} />
              <div className="main-view">
                <Switch>
                  <Route exact path="/feed" component={Feed} />
                  <Route exact path="/review" component={Review} />
                  <Route exact path="/settings" component={Settings} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/friends" component={Friends} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
          )}
          {!loggedIn && (
            <div className="auth-wrapper" style={{ paddingTop: 11 }}>
              <Route exact path="/" component={() => <Landing login={login} loginErr={loginErr} />
              } />
              {/* <Route exact path="/feed" component={() => <LoginForm user={login} />} /> */}
              <Route exact path="/signup" component={SignupForm} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;