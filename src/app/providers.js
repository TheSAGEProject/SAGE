'use client';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Auth0Provider } from '@auth0/auth0-react';

const getRedirectUri = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return ''; // Return a fallback value for server-side rendering
};

function MyApp({ children }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Auth0Provider 
        domain="dev-u0rvjixq8zw03k11.us.auth0.com"
        clientId="bDKSRH8fSFDC3cZ2y4fKgYTp6jkNHSkI"
        authorizationParams={{
          redirect_uri: getRedirectUri()
        }}
      >
        {children}
      </Auth0Provider>
    </DndProvider>
  );
}

export default MyApp;