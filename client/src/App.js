import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginForm from './pages/Auth/LoginForm'
import SignupForm from './pages/Auth/SignupForm'
import Nav from './components/Nav'
import NoMatch from './pages/NoMatch'
import AUTH from './utils/AUTH'
import Feed from './pages/Feed'

// EXS 16th July 2020 - Added in bulma calls
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Button } from 'react-bulma-components'

function App () {
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
      console.log(response.data)
      if (response.status === 200) {
        // update the state
        setLoggedIn(true)
        setUser(response.data.user)
      }
    })
  }

  return (
    <div className='App'>
      {/* Insert test bulma items here to see whats up */}
      <button className='button is-warning'>Our Bulma Button</button>
      <div
        className='box'
        img
        src='https://bulma.io/images/placeholders/128x128.png'
        alt='Image'
      ></div>
      {/* End of bulma test stuff */}

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
        <div className='auth-wrapper' style={{ paddingTop: 40 }}>
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
  )
}

export default App
