import * as React from 'react';
import styles from './styles.scss';
import { NavLink, Route } from 'react-router-dom';
import AdminUsers from './AdminUsers';

const AdminProducts = () => {
  return <div>Some options to administer products</div>;
};

const Admin = () => {
  return (
    <div className="container">
      <h1>Admin Panel</h1>
      <ul className={styles.sections}>
        <li key="users">
          <NavLink to={`/admin/users`} activeClassName={styles.active}>
            Users
          </NavLink>
        </li>
        <li key="products">
          <NavLink to={`/admin/products`} activeClassName={styles.active}>
            Products
          </NavLink>
        </li>
      </ul>
      <Route path="/admin/users" component={AdminUsers} />
      <Route path="/admin/products" component={AdminProducts} />
    </div>
  );
};

export default Admin;
