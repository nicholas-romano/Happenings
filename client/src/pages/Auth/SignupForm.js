import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
import { Card } from "../../components/Card";
import Input from "../../components/Form/Input";
import Email from "../../components/Form/Email";
import Password from "../../components/Form/Password";
import { FormBtn } from "../../components/Form";
import AUTH from "../../utils/AUTH";

function SignupForm() {

  const [userObject, setUserObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [redirectTo, setRedirectTo] = useState(null);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserObject({...userObject, [name]: value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO - validate!
    console.log(userObject);
    AUTH.signup({
        firstName: userObject.firstName,
        lastName: userObject.lastName,
        userName: userObject.username,
        password: userObject.password,
        userEmail: userObject.email,
        friends: [],
        userInterest: []
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
    <Container>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
          <Card title="Create your Happenings Account">
            <form  style={{ marginTop: 10, textAlign: 'left' }}>
              <Input
                name="firstName"
                title="First Name"
                onChange={handleInputChange}
                value={userObject.firstName}
                placeholder="First Name"
              />
              <Input
                name="lastName"
                title="Last Name"
                onChange={handleInputChange}
                value={userObject.lastName}
                placeholder="Last Name"
              />
               <Email
                name="email"
                title="Email"
                onChange={handleInputChange}
                value={userObject.email}
                placeholder="Email"
              />
              <Input
                type="text"
                name="username"
                title="Username"
                onChange={handleInputChange}
                value={userObject.username}
                placeholder="Username"
              />
              <Password
                name="password"
                title="Password"
                onChange={handleInputChange}
                value={userObject.password}
                placeholder="Password"
              />
              <Password
                type="password"
                name="confirmPassword"
                title="Confirm Password"
                onChange={handleInputChange}
                value={userObject.confirmPassword}
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
  );
}

export default SignupForm;
