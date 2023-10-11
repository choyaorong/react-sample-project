import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import styles from './Product.module.css';
import ProductForm from './ProductForm';

function Product({ id, name, energy, measureWeight, measureLabel, description }) {
  const ctx = useContext(CartContext);
  const addCartHandler = (quantity) => {
    ctx.addItem({
      id: id,
      name: name,
      quantity: quantity,
      // price: price
    });
  }
  return (
    <li className={styles.product}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{measureWeight} {measureLabel} = {energy} kcal</div>
        <img src={description} alt={name} />
        {/* <div className={styles.price}>{`$${price.toFixed(2)}`}</div> */}
      </div>
      <div>
        <ProductForm id={id} onAddCart={addCartHandler} />
      </div>
    </li>
  )
}

export default Product