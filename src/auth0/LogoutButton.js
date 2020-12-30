import { Button } from 'grommet';
import { Logout } from 'grommet-icons';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <Button
      icon={<Logout />}
      label="Log Out"
      onClick={() => logout({ returnTo: window.location.origin })}
    />
  );
}

export default LogoutButton;
