import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Root } from './style/root';
import AppRoutes from './AppRoutes';
import { AuthProvider } from './context/authContext';
import { GlobalContextProvider } from './context/globalContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <GlobalContextProvider>
      <AuthProvider>
          <Root>
            <AppRoutes />
          </Root>
      </AuthProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  );
};

export default App;