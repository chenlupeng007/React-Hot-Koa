import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routes from './routes';
import { StoreContext, IStore } from 'contexts';
import './index.scss';

const App = () => {
  const [login, setLogin] = useState(false);
  const store: IStore = {
    login,
    setLogin,
  };
  return (
    <StoreContext.Provider value={{ ...store }}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </StoreContext.Provider>
  );
};

export default App;
