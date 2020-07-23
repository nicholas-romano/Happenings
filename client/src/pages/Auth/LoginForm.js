import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
import { Card } from "../../components/Card";
import { Input, FormBtn } from "../../components/Form";

console.log('Inside our loginForm.js')

function LoginForm({ login }) {
  const [userObject, setUserObject] = useState({
    username: "",
    password: "",
  });
  const [redirectTo, setRedirectTo] = useState(null);

  const handleChange = (event) => {
    setUserObject({
      ...userObject,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userObject.username, userObject.password);
    setRedirectTo("/");
  };

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  } else {
    return (
      <Container>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <Card title="Login to the Happenings App!">
              <form style={{ marginTop: 10, textAlign: 'left' }}>
                <Input
                  type="text"
                  title="Username"
                  name="username"
                  value={userObject.username}
                  onChange={handleChange}
                  placeholder="Username"
                />
                <Input
                  type="password"
                  title="Password"
                  name="password"
                  value={userObject.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <Link to="/signup">Create Account</Link>
                <FormBtn onClick={handleSubmit}>Login</FormBtn>
              </form>
            </Card>
          </Col>
          <Col size="md-3"></Col>
        </Row>
      </Container>
    );
  }
}

export default LoginForm;
