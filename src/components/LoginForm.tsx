import React, { useContext, useState } from 'react';
import { Context as MainContext } from '../context/MainContext';
import { Button, ErrorMessage, InputsWrapper, LoginFormContainer, LoginFormWrapper, LoginTitle } from '../styles/LoginStyle';
import FloatingInput from './FloatingInput';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorState, setErrorState] = useState<any>(null);
  const { loginUser, resetError, state: {error} } = useContext(MainContext)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if(!!username && !!password) {
      try {
        loginUser(username, password) 
      } catch (error) {
        setErrorState(error)
      }
    } else {
      resetError()
      setErrorState('Insert Credentials')
    }
  };

  return (
    <LoginFormContainer>
        <LoginFormWrapper onSubmit={handleLogin}>
          <LoginTitle>Hi, Log In Please :)</LoginTitle>
          <InputsWrapper>
              <FloatingInput
                labelText="Username"
                type="text"
                name="username"
                value={username}
                onChange={(e: any) => setUsername(e.target.value)}
              />
              <FloatingInput
                labelText="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              
          </InputsWrapper>

          <Button type="submit">Login</Button>
          {errorState && <ErrorMessage>{errorState}</ErrorMessage>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </LoginFormWrapper>

    </LoginFormContainer>
  );
};

export default LoginForm;
