'use client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function MyApp({ children }) {
  return (
    <DndProvider backend={HTML5Backend}>
      {children}
    </DndProvider>
  );
}

export default MyApp;


//previous
//domain="dev-u0rvjixq8zw03k11.us.auth0.com"
//clientId="bDKSRH8fSFDC3cZ2y4fKgYTp6jkNHSkI"