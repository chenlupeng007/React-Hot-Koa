import * as React from 'react';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import styles from './styles.scss';
import { IProduct } from '../../interfaces';

const isShow: (product: IProduct, search: string) => boolean = (
  product,
  search,
) => {
  return (
    !search ||
    (!!search && product.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
  );
};

const Products: React.SFC<{ products: IProduct[] }> = props => {
  const { products } = props;
  const { location } = useReactRouter();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get('search') || '';

  return (
    <div className={styles.container}>
      <p>Welcome to React Shop where you can get all your tools for ReactJS!</p>
      <ul className={styles.list}>
        {products.map(product =>
          isShow(product, search) ? (
            <li key={product.id} className={styles.item}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ) : null,
        )}
      </ul>
    </div>
  );
};

export default Products;
