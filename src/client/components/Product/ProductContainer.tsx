import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import { Prompt } from 'react-router-dom';
import Product from './Product';
import styles from './styles.scss';
import { IProduct } from 'interfaces';

const ProductContainer: React.SFC<{ products: IProduct[] }> = props => {
  const { products } = props;
  const { match } = useReactRouter<{ id: string }>();
  const id: number = parseInt(match.params.id, 10);
  const product = products.find(p => p.id === id);

  const [added, setAdded] = useState(false);
  const handleAddClick = () => {
    setAdded(true);
  };

  return (
    <div className={styles.container}>
      <Prompt
        when={!added}
        message={() => 'Are you sure you leave without buying this product?'}
      />
      {product ? (
        <Product
          product={product}
          inBasket={added}
          onAddToBasket={handleAddClick}
        />
      ) : (
        <p>Loding...</p>
      )}
    </div>
  );
};

export default ProductContainer;
