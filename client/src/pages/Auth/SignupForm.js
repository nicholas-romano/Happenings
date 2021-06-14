import React, { useState, useRef, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Footer from '../../components/Footer';
import { Container, Row, Col } from "../../components/Grid";
import { Card } from "../../components/Card";
import Input from "../../components/Form/Input";
import { FormBtn } from "../../components/Form";
import AUTH from "../../utils/AUTH";

function SignupForm(props) {

  //console.log(props)

const firstNameRef = useRef();
const lastNameRef = useRef();
const emailRef = useRef();
const userNameRef = useRef();
const passwordRef = useRef();
const confirmPasswordRef = useRef();

  const [redirectTo, setRedirectTo] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO - validate!

    const validFirstName = props.isAlpha(firstNameRef.current.value);
    const validLastName = props.isAlpha(lastNameRef.current.value);
    const validEmail = props.validateEmailAddress(emailRef.current.value);
    const validUserName = props.isAlphaNumeric(userNameRef.current.value);
    const matchingPasswords = props.confirmPassword(passwordRef.current.value, confirmPasswordRef.current.value);

    if (validFirstName) {
      props.setValidFname(true);
    } else {
     props.setValidFname(false);
    }

    if (validLastName) {
      props.setValidLname(true);
    } else {
     props.setValidLname(false);
    }

    if (validEmail) {
      props.setValidEmail(true);
    } else {
     props.setValidEmail(false);
    }

    if (validUserName) {
      props.setValidUserName(true);
    } else {
     props.setValidUserName(false);
    }

    if (matchingPasswords) {
      props.setMatch(true);
    } else {
      props.setMatch(false);
    }

    if (validFirstName && validLastName && validEmail && validUserName && matchingPasswords) {
      //All fields are valid, send the form data:
       AUTH.signup({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        userName: userNameRef.current.value,
        password: passwordRef.current.value,
        userEmail: emailRef.current.value,
        friends: [],
        userInterest: [],
        profileImg: ''
      }).then((response) => {
        //console.log(response);
      if (!response.data.errmsg) {
        setRedirectTo("/");
      } else {
        //console.log("duplicate");
      }
      });
    }

  };

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  }

  return (
    <>
      <Hero />
      <div className="container-fluid">
        <Container>
          <Row>
            <Col size="md-3"></Col>
            <Col size="md-6">
              <Card title="Create your Happenings Account">
                <form  style={{ marginTop: 10, textAlign: 'left' }}>
                  <Input
                      name="firstName"
                      title="First Name"
                      type="input"
                      placeholder="First Name"
                      inputRef={firstNameRef}           
                  />
                  <p className="error">
                  {
                    (props.validFirstName === false) ? 'First Name field must be only letters' : '' 
                  }
                  </p>
                  <Input
                      name="lastName"
                      title="Last Name"
                      type="input"
                      placeholder="Last Name"
                      inputRef={lastNameRef}
                  />
                  <p className="error">
                  {
                    (props.validLastName === false) ? 'Last Name field must be only letters' : '' 
                  }
                  </p>
                  <Input
                    name="email"
                    title="Email"
                    type="email"
                    placeholder="Email"
                    inputRef={emailRef}
                  />
                  <p className="error">
                  {
                    (props.validEmail === false) ? 'Email Address format is invalid' : '' 
                  }
                  </p>
                  <Input
                    name="userName"
                    title="Username"
                    type="input"
                    placeholder="Username"
                    inputRef={userNameRef}
                  />
                  <p className="error">
                  {
                    (props.validUserName === false) ? 'Username field must be letters and numbers' : '' 
                  }
                  </p>
                  <Input
                    name="password"
                    title="Password"
                    type="password"
                    inputRef={passwordRef}
                    placeholder="Password"
                  />
                  <Input
                    name="confirmPassword"
                    title="Confirm Password"
                    type="password"
                    placeholder="Confirm Password"
                    inputRef={confirmPasswordRef}
                  />
                  <p className="error">
                  {
                    (props.passwordsMatch === false) ? 'Passwords do not match' : '' 
                  }
                  </p>
                  <Link to="/">Login</Link>
                  <FormBtn onClick={handleSubmit}>Register</FormBtn>
                </form>
              </Card>
            </Col>
            <Col size="md-3"></Col>
          </Row>
        </Container>
      </div>
    <Footer />
  </>
  )
}
export default SignupForm;
