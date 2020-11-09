// libraries
import React from 'react';
import 'materialize-css';

// services
import { useRoutes } from './routes';

function App() {
  const routes = useRoutes(false);

  return <div className='container'>{routes}</div>;
}

export default App;
