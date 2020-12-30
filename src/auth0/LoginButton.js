import { Button } from 'grommet';
import { Login } from 'grommet-icons';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      icon={<Login />}
      label="Log In"
      onClick={() => loginWithRedirect()}
    />
  );
}

export default LoginButton;
