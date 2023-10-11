import bannerImage from '../../assets/refrigeratror-with-groceries.png';
import CartButton from './CartButton';
import styles from './Header.module.css';

function Header({ onShowCart }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Free My Fridge</h1>
        <CartButton onClick={onShowCart} />
      </header>
      <div className={styles.mainImage}>
        <img src={bannerImage} alt='Shopper' />
      </div>
    </>
  )
}



export default Header