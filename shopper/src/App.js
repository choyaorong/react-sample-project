import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Catalogue from './components/Catalogue/Catalogue';
import Header from './components/Layout/Header';
import Receipe from './components/Receipe/Receipe';
import { CartProvider } from './store/CartContext';

function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const showCartHandler = () => {
    setIsShowCart(true);
  }

  const hideCartHandler = () => {
    setIsShowCart(false);
  }

  return (
    <CartProvider>
      {/* <BrowserRouter>
        <Routes> */}

      {isShowCart && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <main>
        <h2 style={{ fontSize: 20, textAlign: "center" }}>Ingredients</h2>
        <Catalogue />
        <h2 style={{ fontSize: 20, textAlign: "center" }}>Receipe</h2>
        <Receipe />
      </main>
      {/* </Routes>
      </BrowserRouter> */}

    </CartProvider>
  );
}

export default App;
