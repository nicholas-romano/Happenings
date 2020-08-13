import React, { useState, useRef, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Footer from '../../components/Footer';
import { Container, Row, Col } from "../../components/Grid";
import { Card } from "../../components/Card";
import Input from "../../components/Form/Input";
import { FormBtn } from "../../components/Form";
import AUTH from "../../utils/AUTH";

function SignupForm() {

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
                  <Input
                      name="lastName"
                      title="Last Name"
                      type="input"
                      placeholder="Last Name"
                      inputRef={lastNameRef}
                  />
                  <Input
                    name="email"
                    title="Email"
                    type="email"
                    placeholder="Email"
                    inputRef={emailRef}
                  />
                  <Input
                    name="userName"
                    title="Username"
                    type="input"
                    placeholder="Username"
                    inputRef={userNameRef}
                  />
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
