import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import Nav from '../Nav'; EXS 19th July 2020 - commented out as unused at this time
import Icon from '../../assets/HapLogoIcon.png'
import 'react-bulma-components/dist/react-bulma-components.min.css'

// EXS <a href> added to the following lines of code: 12, 17, 31, 34, 36, 38, 40
// RK added ='bulma stuff' after blank href tags to remove errors

const styles = {
  buttonColor: {
    backgroundColor: 'rgba(36, 123, 160, 1)',
    color: 'snow'
  }
}

const Header = (props) => {
   
    return (
      <>
        <nav className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a href='bulma stuff' className='navbar-item' href='localhost:3000/home'>
              <img src={Icon} alt='LogoIcon' />
            </a>
            <div className="control pl-5">
              <input className="input is-focused" type="text" placeholder="Search for something" />
            </div>
            <button type='submit' className='button is-primary ml-3' style={styles.buttonColor}>Search</button>
            
            <a
              href='bulma stuff'
              className='navbar-burger burger'
              role='button'
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarBasicExample'
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
            <div>
              <p className='mx-6'>Welcome back user.id!  See what is happening around you!
              </p>
            </div>
          <div className='navbar-menu'>
            <div className='navbar-end'>
              <Link to='/'>
              <a href='bulma stuff' className='navbar-item'>
                Home
              </a>
              </Link>

              <Link to='/friends'>
              <a href='bulma stuff' className='navbar-item'>
                Friends
              </a>
              </Link>

              <div className='navbar-item has-dropdown is-hoverable'>
                <Link to='/user'>
                <a href='bulma stuff' className='navbar-link'>
                  Account
                </a>
                </Link>

                <div className='navbar-dropdown'>
                  <Link to='/settings'>
                  <a href='bulma stuff' className='navbar-item'>
                    Settings
                  </a>
                  </Link>

                  <hr className='navbar-divider'></hr>
                  <Link to='/contact'>
                  <a href='bulma stuff' className='navbar-item'>
                    Contact
                  </a>
                  </Link>

                  <hr className='navbar-divider'></hr>
                  <Link to="#" className="logout" onClick={props.logout}>
                  <a href='bulma stuff' className='navbar-item'>
                    Logout
                  </a>

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }


export default Header;