import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Redirect, Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
import { Card } from "../../components/Card";
import { Input, FormBtn } from "../../components/Form";
import AUTH from "../../utils/AUTH";

function SignupForm() {

  const { register, handleSubmit, errors } = useForm();

  const [userObject, setUserObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    redirectTo: null,
  });
  const [redirectTo, setRedirectTo] = useState(null);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserObject({...userObject, [name]: value})
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // TODO - validate!
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
                type="text"
                name="firstName"
                title="First Name"
                onChange={handleInputChange}
                value={userObject.firstName}
                placeholder="First Name"
                register={register}
                errors={errors}
              />
              <Input
                type="text"
                name="lastName"
                title="Last Name"
                onChange={handleInputChange}
                value={userObject.lastName}
                placeholder="Last Name"
                register={register}
                errors={errors}
              />
               <Input
                type="email"
                name="email"
                title="Email"
                onChange={handleInputChange}
                value={userObject.email}
                placeholder="Email"
                register={register}
                errors={errors}
              />
              <Input
                type="text"
                name="username"
                title="Username"
                onChange={handleInputChange}
                value={userObject.username}
                placeholder="Username"
                register={register}
                errors={errors}
              />
              <Input
                type="password"
                name="password"
                title="Password"
                onChange={handleInputChange}
                value={userObject.password}
                placeholder="Password"
                register={register}
                errors={errors}
              />
              <Input
                type="password"
                name="confirmPassword"
                title="Confirm Password"
                onChange={handleInputChange}
                value={userObject.confirmPassword}
                placeholder="Confirm Password"
                register={register}
                errors={errors}
              />
              <Link to="/">Login</Link>
              <FormBtn onClick={handleSubmit(onSubmit)}>Register</FormBtn>
            </form>
          </Card>
        </Col>
        <Col size="md-3"></Col>
      </Row>
    </Container>
  );
}

export default SignupForm;
