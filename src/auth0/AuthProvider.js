import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { CLIENT_ID, DOMAIN } from './utils';

function AuthProvider({ children }) {
  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
}

export default AuthProvider;
