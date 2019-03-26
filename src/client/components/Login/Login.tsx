import * as React from 'react';
import useReactRouter from 'use-react-router';
import { StoreContext } from 'contexts';

const LoginPage: React.SFC = () => {
  const { login, setLogin } = React.useContext(StoreContext);
  const { history } = useReactRouter();
  const handleLogin = () => {
    setLogin(true);
    history.push('/admin');
  };
  const handleLogout = () => {
    setLogin(false);
  };
  return (
    <div className="container">
      {login ? <p>You can Logout</p> : <p>You need to login ...</p>}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoginPage;
