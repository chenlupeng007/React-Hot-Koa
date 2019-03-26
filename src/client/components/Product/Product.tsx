import * as React from 'react';
import Tabs from './Tabs';
import styles from './styles.scss';
import { IProduct } from 'interfaces';
interface IProps {
  product: IProduct;
  inBasket: boolean;
  onAddToBasket: () => void;
}

const Product = (props: IProps) => {
  const { product, inBasket, onAddToBasket } = props;
  const handleAddClick = onAddToBasket;
  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <Tabs>
        <Tabs.Tab
          name="Description"
          initialActive={true}
          heading={() => <b>Description</b>}
        >
          <p>{product.description}</p>
        </Tabs.Tab>
        <Tabs.Tab name="Reviews" heading={() => 'Reviews'}>
          <ul className={styles.reviews}>
            {product.reviews.map(review => (
              <li key={review.reviewer} className={styles.item}>
                <i>"{review.comment}"</i> - {review.reviewer}
              </li>
            ))}
          </ul>
        </Tabs.Tab>
      </Tabs>
      <p className="price">
        {new Intl.NumberFormat('en-US', {
          currency: 'USD',
          style: 'currency',
        }).format(product.price)}
      </p>
      {!inBasket && <button onClick={handleAddClick}>Add to basket</button>}
    </React.Fragment>
  );
};

export default Product;
