import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../Auth/LoginForm';
// import SignupForm from '../Auth/SignupForm';
// import NoMatch from '../NoMatch';
// import AUTH from '../../utils/AUTH';
// import Nav from '../../components/Nav';
// import Feed from '../Feed';

import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import MediaContent from '../../components/MediaContent';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import DisplayMap from '../../components/Map/map';

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
  },
  breaking: {
    backgroundColor: 'rgba(183, 209, 218, 1)',
    marginTop: -12,
    padding: 90
  }
};

function Landing(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory();

  const {
    login,
    userObject,
    setUserObject,
    register,
    handleSubmit,
    errors
  } = props;

  console.log('props landing: ', props);

  return (
    <div style={styles.back}>
      <Hero />

      <div className="columns is-gapless is-desktop">
        <div className="column is-two-thirds" style={styles.twothirds}>
          <LoginForm 
            login={login} 
            userObject={userObject} 
            setUserObject={setUserObject} 
            register={register}  
            handleSubmit={handleSubmit}
            errors={errors}
          />
        </div>
        <div className="column is-one-third" style={styles.onethird}>
          <DisplayMap />
        </div>
      </div>
      <div className='columns'>
        <div className='column is-full is-centered' style={styles.breaking}></div>
      </div>

      <MediaContent />

      <Footer />
    </div>
  );
}

export default Landing;
