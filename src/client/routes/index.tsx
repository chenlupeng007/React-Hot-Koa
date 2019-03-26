import React, { useContext, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import ProductsPage from 'pages/ProductsPage';
import NotFoundPage from 'pages/NotFoundPage';
import { StoreContext } from 'contexts';
import useReactRouter from 'use-react-router';
import { CSSTransition } from 'react-transition-group';
const AdminPage = React.lazy(() => import('pages/AdminPage'));
const Home = () => <Redirect to="/products" />;
const Routes: React.SFC = () => {
  const { login } = useContext(StoreContext);
  const { location } = useReactRouter();
  return (
    <CSSTransition key={location.key} timeout={500} classNames="animate">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin">
          {login ? (
            <Suspense fallback={<div className="container">Loading...</div>}>
              <AdminPage />
            </Suspense>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/products" component={ProductsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </CSSTransition>
  );
};

export default Routes;
