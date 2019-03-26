import * as React from 'react';
import { NavLink, Route } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import { adminUsersData } from './UsersData';
import { IUser } from 'interfaces';
import styles from './styles.scss';

const AdminUsers = () => {
  const { match } = useReactRouter();
  const [users, setUsers] = React.useState<IUser[]>([]);
  React.useEffect(() => {
    setTimeout(() => {
      setUsers(adminUsersData);
    }, 200);
  }, []);
  const AdminUser = () => <User users={users} />;
  return (
    <div>
      <ul className={styles.sections}>
        {adminUsersData.map(user => (
          <li>
            <NavLink
              to={`/admin/users/${user.id}`}
              activeClassName={styles.active}
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route path={`${match.path}/:id`} component={AdminUser} />
    </div>
  );
};

const User: React.SFC<{ users: IUser[] }> = props => {
  const { users } = props;
  const { match } = useReactRouter<{ id: string }>();
  const id = parseInt(match.params.id, 10);
  const user = users.find(u => u.id === id);
  if (!user) return null;
  return (
    <div>
      <div>
        <b>Id: </b>
        <span>{user.id.toString()}</span>
      </div>
      <div>
        <b>Is Admin: </b>
        <span>{user.isAdmin.toString()}</span>
      </div>
    </div>
  );
};

export default AdminUsers;
