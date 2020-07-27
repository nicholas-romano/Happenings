import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
import { Card } from "../../components/Card";
import { Input, FormBtn } from "../../components/Form";

console.log('Inside our loginForm.js')

function LoginForm({ login, userObject, setUserObject, register, handleSubmit, errors }) {

  const handleInputChange = (event) => {
    setUserObject({
      ...userObject,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = () => {
    login({
      userName: userObject.userName,
      password: userObject.password
    });
  }

    return (
      <Container>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <Card title="Login to the Happenings App!">
              <form style={{ marginTop: 10, textAlign: 'left' }}>
                <Input
                  type="text"
                  name="userName"
                  title="Username"
                  onChange={handleInputChange}
                  value={userObject.userName}
                  placeholder="Username"
                  register={register}
                  errors={errors}
                />
                <Input
                  type="password"
                  title="Password"
                  name="password"
                  value={userObject.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  register={register}
                  errors={errors}
                />
                <Link to="/signup">Create Account</Link>
                <FormBtn onClick={handleSubmit(onSubmit)}>Login</FormBtn>
              </form>
            </Card>
          </Col>
          <Col size="md-3"></Col>
        </Row>
      </Container>
    );
  }

export default LoginForm;
