
'use client';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ children }) {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Auth0Provider 
          domain="dev-u0rvjixq8zw03k11.us.auth0.com"
          clientId="bDKSRH8fSFDC3cZ2y4fKgYTp6jkNHSkI"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}>
            {children}
    
        </Auth0Provider>
      </DndProvider>
    </>
  )
}

export default MyApp
