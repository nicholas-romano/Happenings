import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col } from "../Grid";
import "./Nav.css";

const styles = {
  head: {
    backgroundColor: 'rgba(36, 123, 160, 1)'
  },
  word: {
    color: 'snow'
  }
}

const Nav = (props) => {

   let greeting;

  if (props.user === null) {
    greeting = <p>Hello guest</p>;
  } else if (props.user.firstName) {
    greeting = (
      <Fragment>
        Welcome back, <strong>{props.user.firstName}</strong>
      </Fragment>
    );
  } else if (props.user.userName) {
    greeting = (
      <Fragment>
        Welcome back, <strong>{props.user.userName} </strong>
      </Fragment>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg" style={styles.head}>
      <Col size="md-6 sm-6" >
        <Link to="/feed" className="navbar-brand" style={styles.word}>
          Happenings App
        </Link>
      </Col>
      <Col size="md-6 sm-6">
        <div className="float-right">
          <span className="greeting">{greeting} - {" "}</span>
          <Link to="/" className="logout" onClick={props.logout}>
            Logout
          </Link>
        </div>
      </Col>
    </nav>
  );
};

export default Nav;
