import React from "react";
import { Link } from "react-router-dom";

import Icon from "../../assets/HapLogoIcon.png";
import "react-bulma-components/dist/react-bulma-components.min.css";
// import LocationSearch from '../LocationSearch/locSearch';

// EXS <a href> added to the following lines of code: 12, 17, 31, 34, 36, 38, 40
// RK added ='bulma stuff' after blank href tags to remove errors
const Header = () => {

  const [isActive, setisActive] = React.useState(false)

  return (
    <nav className="navbar menu" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/feed">
          <img src={Icon} alt="LogoIcon" />
        </Link>
        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          role="button"
          aria-label="menu"
          aria-expanded="false"
          // data-target="navbar-menu"
          
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <Link to="feed" className="navbar-item">
            Home
          </Link>
          <Link to="/friends" className="navbar-item">
            Friends
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="feed" className="navbar-link">
              Account
            </a>
            <div className="navbar-dropdown">
              <Link to="/settings" className="navbar-item">
                Settings
              </Link>
              <hr className="navbar-divider"></hr>
              <Link to="/contact" className="navbar-item">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
