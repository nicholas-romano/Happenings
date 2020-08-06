import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../Auth/LoginForm";

import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

import "react-bulma-components/dist/react-bulma-components.min.css";

const styles = {
  isfull: {
    paddingBottom: 10,
    backgroundColor: "rgba(183, 209, 218, 1)"
  },
  onethird: {
    backgroundColor: "rgba(163, 124, 64, 1)",
  },
  back: {
    backgroundColor: "rgba(42, 45, 52, 1)",
  },
  breaking: {
    backgroundColor: "rgba(183, 209, 218, 1)",
    marginTop: -12,
    padding: 90,
  },
};

function Landing(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory();

  const { login, loginErr } = props;

  console.log("props landing: ", props);

  return (
    <>
      <div className="container-fluid">
        <main>
        <div style={styles.back}>
          <Hero />
          <div className="columns is-gapless is-desktop">
            <div className="column is-full" style={styles.isfull}>
              <LoginForm login={login} loginErr={loginErr} />
            </div>
          </div>
          <div className="columns">
            <div
              className="column is-full is-centered"
              style={styles.breaking}
            ></div>
          </div>
        </div>
        </main>
      </div>
    <Footer />
    </>
  );
}

export default Landing;
