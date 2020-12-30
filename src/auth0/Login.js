import {
  Anchor, Box, Image, Paragraph, Text,
} from 'grommet';
import React from 'react';
import LoginButton from './LoginButton';

function Login() {
  return (
    <Box direction="row" pad="medium" gap="medium">
      <Box pad="medium" elevation="medium" gap="small">
        <Paragraph>
          Visit
          {' '}
          <Anchor
            href="https://auth0.com/docs/libraries/auth0-react"
            target="_blank"
            label="Auth0 React SDK for Single Page Apps"
            color="accent-1"
          />
        </Paragraph>

        <Paragraph>
          Auth0 enables the Google social provider by default on new tenants and
          offers you developer keys to test logging in with social identity
          providers. However, these developer keys have some limitations that
          may cause your application to behave differently. For more details on
          what this behavior may look like and how to fix it, consult the Test
          Social Connections with Auth0 Developer Keys document.
        </Paragraph>

        <LoginButton />
      </Box>
      <Box pad="medium" elevation="medium" gap="small" width="xxlarge">
        <Text>When you log in, you&#39;ll see a form like this</Text>

        <Image src="https://cdn.auth0.com/blog/universal-login/lightweight-login.png" />
      </Box>
    </Box>
  );
}

export default Login;
