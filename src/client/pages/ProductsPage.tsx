import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import Products from '../components/Products';
import Product from '../components/Product';
import { products as data } from './ProductsData';
import { IProduct } from '../interfaces';

const ProductsPage = () => {
  const { match } = useReactRouter();
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setProducts(data);
    }, 200);
  }, []);
  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        render={props => <Products {...props} products={products} />}
      />
      <Route
        path={`${match.path}/:id`}
        render={props => <Product {...props} products={products} />}
      />
    </>
  );
};

export default ProductsPage;
