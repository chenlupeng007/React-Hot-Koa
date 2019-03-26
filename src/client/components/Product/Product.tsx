import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import { Prompt } from 'react-router-dom';
import styles from './styles.scss';
import { IProduct } from '../../interfaces';

const Product: React.SFC<{ products: IProduct[] }> = props => {
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
        <React.Fragment>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="price">
            {new Intl.NumberFormat('en-US', {
              currency: 'USD',
              style: 'currency',
            }).format(product.price)}
          </p>
          {!added && <button onClick={handleAddClick}>Add to basket</button>}
        </React.Fragment>
      ) : (
        <p>Loding...</p>
      )}
    </div>
  );
};

export default Product;
