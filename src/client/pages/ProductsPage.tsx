import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import Products from 'components/Products';
import Product from 'components/Product';
import { IProduct } from 'interfaces';
import { getProducts } from 'api';

const ProductsPage = () => {
  const { match } = useReactRouter();
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetchData = async () => {
    const products = await getProducts();
    setProducts(products);
  };
  useEffect(() => {
    fetchData();
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
