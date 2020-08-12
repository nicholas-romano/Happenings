import React, { useState, useRef, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
import { Card } from "../../components/Card";
import Input from "../../components/Form/Input";
import { FormBtn } from "../../components/Form";

console.log('Inside our loginForm.js')

function LoginForm({ login, loginErr }) {

  //console.log('loginErr: ', loginErr);

  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    login({
      userName: userNameRef.current.value,
      password: passwordRef.current.value
    });
  }

  const checkForError = () => {
    if (loginErr !== '') {
      return <p className="error">{loginErr}</p>
    } else {
      return <></>;
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
                  placeholder="Username"
                  inputRef={userNameRef}
                />
                <Input
                  title="Password"
                  type="password"
                  name="password"
                  inputRef={passwordRef}
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
