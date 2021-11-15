import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import { Rotate, Rotate1, Rotate2, Rotate3, Rotate4, Rotate5, FormContainer } from './FormAuth.styles';

const FormAuth = ({ setAuth }) => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchLogin = process.env.REACT_APP_ADMIN_LOGIN;
    const matchPassword = process.env.REACT_APP_ADMIN_PASSWORD;
    if (login === matchLogin && password === matchPassword) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Rotate>
        <Button text="Click Here to Hacking" onClick={() => setAuth(true)} />
      </Rotate>
      <Rotate1>
        <Button text="Have you forgotten your password?" onClick={() => setAuth(true)} />
      </Rotate1>
      <Rotate2>
        <Button text="Are you an admin?" onClick={() => setAuth(true)} />
      </Rotate2>
      <Rotate3>
        <Button text="Choose me, please!" onClick={() => setAuth(true)} />
      </Rotate3>
      <Rotate4>
        <Button text="Are you sure you want to hack this app?" onClick={() => setAuth(true)} />
      </Rotate4>
      <Rotate5>
        <Button text="Warning, danger!" onClick={() => setAuth(true)} />
      </Rotate5>
      <input type="text" name="login" id="login" placeholder="Enter Login" onChange={(e) => setLogin(e.target.value)} />
      <input type="password" name="pass" id="pass" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
      <input type="submit" value="Log In" />
    </FormContainer>
  );
};

export default FormAuth;
