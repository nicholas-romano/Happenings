import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import LoginForm from '../Auth/LoginForm';
import SignupForm from '../Auth/SignupForm';
import NoMatch from '../NoMatch';
import AUTH from '../../utils/AUTH';
import Nav from '../../components/Nav';
import Feed from '../Feed';

import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import MediaContent from '../../components/MediaContent';

import 'react-bulma-components/dist/react-bulma-components.min.css';

const styles = {
  twothirds: {
    paddingBottom: 10,
    backgroundColor: 'rgba(183, 209, 218, 1)'
  },
  onethird: {
    backgroundColor: 'rgba(163, 124, 64, 1)'
  },
  back: {
    backgroundColor: 'rgba(42, 45, 52, 1)'
  }
};

function Landing(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory();

  return (
    <div style={styles.back}>
      <Hero />

      <div className="columns is-gapless is-desktop">
        <div className="column is-two-thirds" style={styles.twothirds}>
          <LoginForm login={props.login} />
        </div>
        <div className="column is-one-third" style={styles.onethird}>
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Input" />
            </div>
          </div>
        </div>
      </div>

      <MediaContent />

      <Footer />
    </div>
  );
}

export default Landing;
