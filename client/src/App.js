import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import SignupForm from "./pages/Auth/SignupForm";
import AUTH from "./utils/AUTH";
import API from "./utils/API";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import Feed from "./pages/Feed";
import Review from "./components/Review";
import Comments from "./components/Review/Comments";
import Landing from "./pages/MainPages/Landing";
import Settings from "./pages/Settings/";
import Contact from "./pages/Contact/";
import Friends from "./pages/Friends";
import UserLocationContext from "./utils/UserLocationContext";
import UserInfoContext from "./utils/UserInfoContext";

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

  const [userProps, setUserProps] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    userEmail: '',
    password: '',
    profileImg: '',
    friends: [],
    userInterest: []
  })

  // useEffect(() => {
  //   console.log('userProps: ', userProps);
  // }, [userProps]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [loginErr, setLoginErr] = useState("");
  const [userLocation, setUserLocation] = useState({
    coords: {
      lat: 0,
      long: 0,
    },
  });

  const history = useHistory();
  console.log("history:", history);
  console.log("loggedIn: ", loggedIn);
  useEffect(() => {
    AUTH.getUser().then((response) => {
      console.log('called getUser()');
      if (response.data.user) {
        setLoggedIn(true);
        //setUser(response.data.user);
        const { userName, firstName, lastName } = response.data.user;
        return getUserInfo(userName, firstName, lastName);
        // history.push('/feed');
      } else {
        setLoggedIn(false);
      }

    })
    return () => {
      setLoggedIn(false);
    };
  }, []);
  const logout = (event) => {
    event.preventDefault();
    AUTH.logout().then((response) => {
      // console.log(response.data);
      if (response.status === 200) {
        setLoggedIn(false);
        history.push("/");
      }
    });
  };

  const getUserInfo = (userName, firstName, lastName) => {
    API.getUserInfo(userName).then((res) => {
      const { userEmail, password, friends, profileImg, userInterest } = res.data[0];
      setUserProps({
          ...userProps, 
          userName, 
          firstName, 
          lastName,
          userEmail,
          password,
          friends,
          profileImg,
          userInterest
      });
      
    });
  }

  // EXS 27th July possible conflict, commented out next two lines
  //  const login = (username, password) => {
  //    AUTH.login(username, password).then((response) => {
  const login = (userData) => {
    AUTH.login(userData)
      .then((response) => {
        if (response.status === 200) {
          // update the state
          setLoggedIn(true);
          const { userName, firstName, lastName } = response.data.user;
          getUserInfo(userName, firstName, lastName);
          history.push("/feed");
        }
      })
      .catch((err) => {
        console.log("err: ", err);
        setLoginErr("Invalid username and password combination.");
      });
  };

  //getting user coordinated to render map and use throughout other components
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserLocation({
        ...userLocation,
        coords: {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        },
      });
    });
  }, []);

  console.log("USER LOCATION: ", userLocation);

  console.log("loggedIn!!!:", loggedIn);
  return (
    <UserLocationContext.Provider value={userLocation}>
      <UserInfoContext.Provider value={userProps}>
        <div className="App" style={styles.back}>
          <div className="columns is-gapless is-desktop">
            <div className="column is-full" style={styles.twothirds}>
              {loggedIn && (
                <div>
                  <Nav user={userProps} logout={logout} />
                  <div className="main-view">
                    <Switch>
                      <Route exact path="/feed" component={Feed} />
                      <Route exact path="/review" component={Review} />
                      <Route exact path="/comments" component={Comments} />
                      <Route exact path="/settings" render={(props) => <Settings {...props} userProps={userProps} />} />
                      <Route exact path="/contact" component={Contact} />
                      <Route exact path="/friends" render={(props) => <Friends {...props} userProps={userProps} />} />
                      <Route component={NoMatch} />
                    </Switch>
                  </div>
                </div>
              )}
              {!loggedIn && (
                <div className="auth-wrapper" style={{ paddingTop: 11 }}>
                  <Route
                    exact
                    path="/"
                    component={() => (
                      <Landing login={login} loginErr={loginErr} />
                    )}
                  />
                  <Route exact path="/signup" component={SignupForm} />
                </div>
              )}
            </div>
          </div>
        </div>
      </UserInfoContext.Provider>
    </UserLocationContext.Provider>
  );
}

export default App;
