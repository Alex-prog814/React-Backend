import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import AuthContextProvider from './contexts/authContext';

function App(){
  return (
    <>
      <AuthContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routing />
          </BrowserRouter>
      </AuthContextProvider>
    </>
  )
};

export default App;