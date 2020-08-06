import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Footer from '../../components/Footer';
import { Container, Row, Col } from "../../components/Grid";
import { Card } from "../../components/Card";
import Input from "../../components/Form/Input";
import { FormBtn } from "../../components/Form";
import AUTH from "../../utils/AUTH";

function SignupForm() {

  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: ""
  });

  const [redirectTo, setRedirectTo] = useState(null);

  // useEffect(() => {
  //   console.log('formObject: ', formObject);
  // }, [formObject]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO - validate!
    console.log(formObject);
    AUTH.signup({
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        userName: formObject.userName,
        password: formObject.password,
        userEmail: formObject.email,
        friends: [],
        userInterest: [],
        profileImg: ''
      }).then((response) => {
        console.log(response);
      if (!response.data.errmsg) {
        setRedirectTo("/");
      } else {
        console.log("duplicate");
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
                      setFormObject={setFormObject}
                      formObject={formObject}
                      value={formObject.firstName}
                      placeholder="First Name"
                  />
                  <Input
                      name="lastName"
                      title="Last Name"
                      type="input"
                      setFormObject={setFormObject}
                      formObject={formObject}
                      value={formObject.lastName}
                      placeholder="Last Name"
                  />
                  <Input
                    name="email"
                    title="Email"
                    type="email"
                    setFormObject={setFormObject}
                    formObject={formObject}
                    value={formObject.email}
                    placeholder="Email"
                  />
                  <Input
                    name="userName"
                    title="Username"
                    type="input"
                    setFormObject={setFormObject}
                    formObject={formObject}
                    value={formObject.userName}
                    placeholder="Username"
                  />
                  <Input
                    name="password"
                    title="Password"
                    type="password"
                    setFormObject={setFormObject}
                    formObject={formObject}
                    value={formObject.password}
                    placeholder="Password"
                  />
                  <Input
                    name="confirmPassword"
                    title="Confirm Password"
                    type="password"
                    setFormObject={setFormObject}
                    formObject={formObject}
                    value={formObject.confirmPassword}
                    placeholder="Confirm Password"
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
