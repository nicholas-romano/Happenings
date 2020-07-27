import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
import { Card } from "../../components/Card";
import Input from "../../components/Form/Input";
import Password from "../../components/Form/Password";
import { FormBtn } from "../../components/Form";

console.log('Inside our loginForm.js')

function LoginForm({ login, loginErr }) {

  console.log('loginErr: ', loginErr);

  const [userObject, setUserObject] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserObject({
      ...userObject,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    login({
      userName: userObject.userName,
      password: userObject.password
    });
  }

  const checkForError = () => {
    if (loginErr !== '') {
      return <p className="error">{loginErr}</p>
    } else {
      return;
    }
  }

    return (
      <Container>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <Card title="Login to the Happenings App!">
              <form style={{ marginTop: 10, textAlign: 'left' }}>
                {
                  checkForError()
                }
                <Input
                  name="userName"
                  title="Username"
                  onChange={handleInputChange}
                  value={userObject.userName}
                  placeholder="Username"
                />
                <Password
                  title="Password"
                  name="password"
                  value={userObject.password}
                  onChange={handleInputChange}
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

export default LoginForm;
