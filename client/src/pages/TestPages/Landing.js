import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';

import LoginForm from './pages/Auth/LoginForm'
import SignupForm from './pages/Auth/SignupForm'
import Nav from './components/Nav'
import NoMatch from './pages/NoMatch'
import AUTH from './utils/AUTH'
import Feed from './pages/Feed'


// EXS 16th July 2020 - Added in bulma calls
import 'react-bulma-components/dist/react-bulma-components.min.css'
import Button from 'react-bulma-components'

const styles = {
    topHead: {
      backgroundColor: 'rgba(36, 123, 160, 1)'
    },
    Prime: {
      margin: 15,
    },
    knil: {
      backgroundColor: 'forestgreen'
    },
    twothirds: {
      paddingBottom: 10,
      backgroundColor: 'rgba(183, 209, 218, 1)'
    },
    onethird: {
      backgroundColor: 'rgba(163, 124, 64, 1)'
    },
    foot: {
      backgroundColor: 'rgba(220, 171, 107, 1)'
    },
    back: {
      backgroundColor: 'rgba(42, 45, 52, 1)'
    },
    title: {
      color: 'snow'
    },
    iconItem: {
      color: 'rgba(220, 171, 107, 1)'
    }
  }




  <div className='App' style={styles.back}>
      <div className='hero'>
        <div className='hero-body' style={styles.topHead}>

          <h1 className="title">Happenings</h1>
        </div>
      </div>

      <div className='columns is-desktop'>

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
        <div className='column is-one-third' style={styles.onethird}>
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Input" />
            </div>
          </div>

        </div>
      </div>

      <div className='columns' style={styles.Prime}>
        <div className='column is-one-fourth'>
          <div className='tile'>
            <article className='media'>
              <figure className='media-left'>
                <p className='image is-64x64'>
                  <img src=''></img>
                </p>
              </figure>
              <div className='media-content'>
                <div className='content'>
                  <p style={styles.title}>
                    <strong style={styles.title}> Richard Kessler </strong> <small> @richardkessler </small> <small> 15m </small>
                    <br></br>
                    I love going to La Cucina Italiana. Great food and the staff is friendly and keep the establishment very clean.
                  </p>
                </div>
                <nav className='level is-mobile'>
                  <div className='level-left'>
                    <a className='level-item'>
                      <span className='icon is-small' style={styles.iconItem}><i className='fas fa-reply'></i></span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small' style={styles.iconItem}><i className='fas fa-retweet'></i></span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small' style={styles.iconItem}><i className='fas fa-heart'></i></span>
                    </a>
                  </div>
                </nav>
              </div>
              <div className='media-right'>
                <button className='delete'></button>
              </div>
            </article>
          </div>
        </div>
        <div className='column is-one-fourth'>
          <div className='tile'>
          <article className='media'>
              <figure className='media-left'>
                <p className='image is-64x64'>
                  <img src=''></img>
                </p>
              </figure>
              <div className='media-content'>
                <div className='content'>
                  <p style={styles.title}>
                    <strong style={styles.title}> Eddie Saunders </strong> <small> @eddiesaunders </small> <small> 45m </small>
                    <br></br>
                    For some really good ice cream you have to check out Sunni Sky's Homemade Ice Cream.
                  </p>
                </div>
                <nav className='level is-mobile'>
                  <div className='level-left'>
                    <a className='level-item'>
                      <span className='icon is-small' style={styles.iconItem}><i className='fas fa-reply'></i></span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small' style={styles.iconItem}><i className='fas fa-retweet'></i></span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small' style={styles.iconItem}><i className='fas fa-heart'></i></span>
                    </a>
                  </div>
                </nav>
              </div>
              <div className='media-right'>
                <button className='delete'></button>
              </div>
            </article>


          </div>
        </div>
        <div className='column is-one-fourth'>
          <div className='tile'>
          <article className='media'>
              <figure className='media-left'>
                <p className='image is-64x64'>
                  <img src=''></img>
                </p>
              </figure>
              <div className='media-content'>
                <div className='content'>
                  <p style={styles.title}>
                    <strong style={styles.title}> Jason Vernot </strong> <small> @jasonvernot </small> <small> 2h </small>
                    <br></br>
                    If you are looking for some amazing food then you have to checkout Gothams in downtown Smithfield! Some of the best subs I have had.
                  </p>
                </div>
                <nav className='level is-mobile'>
                  <div className='level-left'>
                    <a className='level-item'>
                      <span className='icon is-small' style={styles.iconItem}><i className='fas fa-reply'></i></span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small' style={styles.iconItem}><i className='fas fa-retweet'></i></span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small' style={styles.iconItem}><i className='fas fa-heart'></i></span>
                    </a>
                  </div>
                </nav>
              </div>
              <div className='media-right'>
                <button className='delete'></button>
              </div>
            </article>

          </div>
        </div>
        <div className='column is-one-fourth'>
          <div className='tile'>
          <article className='media'>
              <figure className='media-left'>
                <p className='image is-64x64'>
                  <img src=''></img>
                </p>
              </figure>
              <div className='media-content'>
                <div className='content'>
                  <p style={styles.title}>
                    <strong style={styles.title}> Tevin  </strong> <small> @tevin </small> <small> 2d </small>
                    <br></br>
                    For some great D&D campaigns you have to go to Event Horizon Games.  Take your adventuring to the next level.
                  </p>
                </div>
                <nav className='level is-mobile'>
                  <div className='level-left'>
                    <a className='level-item'>
                      <span className='icon is-small' style={styles.iconItem}><i className='fas fa-reply'></i></span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small' style={styles.iconItem}><i className='fas fa-retweet'></i></span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small' style={styles.iconItem}><i className='fas fa-heart'></i></span>
                    </a>
                  </div>
                </nav>
              </div>
              <div className='media-right'>
                <button className='delete'></button>
              </div>
            </article>

          </div>
        </div>

      </div>

      <footer className='footer' style={styles.foot}>
        <div className='content has-text-centered'>
          <p>
            <strong>Happenings</strong> by Eddie, Jason, Nick, Richard, and Tevin.
          </p>
        </div>
      </footer>




    </div>