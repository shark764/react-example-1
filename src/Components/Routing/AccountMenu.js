import { Avatar, Box, Menu } from 'grommet';
import {
  FormDown, Home, Login, Logout, User,
} from 'grommet-icons';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

function AccountMenu() {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const history = useHistory();

  if (isLoading) {
    return null;
  }

  const goTo = (whereTo) => {
    history.push(whereTo);
  };

  const items = [
    {
      label: 'Home',
      icon: <Home />,
      gap: 'small',
      onClick: () => goTo('/'),
    },
  ];
  let avatarUrl = 'https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png';
  if (isAuthenticated) {
    items.push(
      {
        label: 'Profile',
        icon: <User />,
        gap: 'small',
        onClick: () => goTo('/profile'),
      },
      {
        label: 'Logout',
        icon: <Logout />,
        gap: 'small',
        onClick: () => logout({ returnTo: window.location.origin }),
      },
    );
    avatarUrl = user.picture;
  } else {
    items.push({
      label: 'Log In',
      icon: <Login />,
      gap: 'small',
      onClick: () => loginWithRedirect(),
    });
  }

  return (
    <>
      <Menu
        plain
        dropProps={{ align: { top: 'bottom', left: 'left' } }}
        items={items}
      >
        {({ disabled, drop, hover }) => {
          const color = hover && !drop && !disabled ? 'accent-1' : undefined;
          return (
            <Box
              direction="row"
              gap="small"
              // pad="small"
              // background={hover && drop ? 'light-2' : undefined}
            >
              <Avatar src={avatarUrl} />
              <FormDown color={color} />
            </Box>
          );
        }}
      </Menu>
    </>
  );
}

export default AccountMenu;
