import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';

import LoginForm from './pages/Auth/LoginForm'
import SignupForm from './pages/Auth/SignupForm'
import Nav from './components/Nav'
import NoMatch from './pages/NoMatch'
import AUTH from './utils/AUTH'
import Feed from './pages/Feed'
import Hero from './components/Hero'
import MediaContent from './components/MediaContent'
import Header from './components/Header';
import Footer from './components/Footer'


// EXS 16th July 2020 - Added in bulma calls
import 'react-bulma-components/dist/react-bulma-components.min.css'
import Button from 'react-bulma-components'

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
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    AUTH.getUser().then(response => {
      // console.log(response.data);
      if (!!response.data.user) {
        setLoggedIn(true)
        setUser(response.data.user)
      } else {
        setLoggedIn(false)
        setUser(null)
      }
    })

    return () => {
      setLoggedIn(false)
      setUser(null)
    }
  }, [])

  const logout = event => {
    event.preventDefault()

    AUTH.logout().then(response => {
      // console.log(response.data);
      if (response.status === 200) {
        setLoggedIn(false)
        setUser(null)
      }
    })
  }

  const login = (username, password) => {
    AUTH.login(username, password).then(response => {
      console.log('Our user has logged in:', response.data)
      if (response.status === 200) {
        // update the state
        setLoggedIn(true)
        setUser(response.data.user)
      }
    })
  }

  return (

    <div className='App' style={styles.back}>
      <Hero />
      

      <div className='columns is-gapless is-desktop'>

        <div className='column is-two-thirds' style={styles.twothirds}>
          {loggedIn && (
            <div>
              <Nav user={user} logout={logout} />
              <div className='main-view'>
                <Switch>
                  <Route exact path='/' component={Feed} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
          )}
          {!loggedIn && (
            <div className='auth-wrapper' style={{ paddingTop: 11 }}>
              <Route exact path='/' component={() => <LoginForm login={login} />} />
              <Route
                exact
                path='/feed'
                component={() => <LoginForm user={login} />}
              />
              <Route exact path='/signup' component={SignupForm} />
            </div>
          )}

        </div>
        <div className='column is-one-third' style={styles.onethird}>
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
  )
}

export default App