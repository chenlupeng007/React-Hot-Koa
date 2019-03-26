import * as React from 'react';
import { NavLink } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import logo from './logo.svg';
import styles from './styles.scss';

const Header: React.SFC = () => {
  const [search, setSearch] = React.useState('');
  const { location, history } = useReactRouter();
  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setSearch(searchParams.get('search') || '');
  }, []);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  const handleSearchKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      history.push(`/products?search=${search}`);
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <input
          type="search"
          placeholder="search"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeydown}
        />
      </div>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className={styles.title}>React Shop</h1>
      <nav>
        <NavLink
          to="/products"
          className={styles.link}
          activeClassName={styles.active}
        >
          Products
        </NavLink>
        <NavLink
          to="/admin"
          className={styles.link}
          activeClassName={styles.active}
        >
          Admin
        </NavLink>
        <NavLink
          to="/login"
          className={styles.link}
          activeClassName={styles.active}
        >
          Sigin
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
