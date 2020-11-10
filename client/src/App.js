// libraries
import React from 'react';
import 'materialize-css';

// services
import { AuthContext } from './context/AuthContext';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';

// components
import Navbar from './components/Navbar';

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;

  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      {isAuthenticated && <Navbar />}
      <div className='container'>{routes}</div>
    </AuthContext.Provider>
  );
}

export default App;
