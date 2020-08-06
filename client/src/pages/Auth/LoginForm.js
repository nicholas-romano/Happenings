import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
import { Card } from "../../components/Card";
import Input from "../../components/Form/Input";
import { FormBtn } from "../../components/Form";

console.log('Inside our loginForm.js')

function LoginForm({ login, loginErr }) {

  console.log('loginErr: ', loginErr);

  const [formObject, setFormObject] = useState({
    userName: "",
    password: "",
  });

  // useEffect(() => {
  //   console.log('formObject: ', formObject);
  // }, [formObject])

  const handleSubmit = event => {
    event.preventDefault();
    login({
      userName: formObject.userName,
      password: formObject.password
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
      <>
      <Container>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <Card title="Login">
              <form style={{ marginTop: 10, textAlign: 'left' }}>
                {
                  checkForError()
                }
                <Input
                  name="userName"
                  type="input"
                  title="Username"
                  setFormObject={setFormObject}
                  formObject={formObject}
                  value={formObject.userName}
                  placeholder="Username"
                />
                <Input
                  title="Password"
                  type="password"
                  name="password"
                  value={formObject.password}
                  setFormObject={setFormObject}
                  formObject={formObject}
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
      </>
    );
  }

export default LoginForm;
