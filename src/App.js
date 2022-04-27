import './App.css';
import Header from './components/Layout/Header';
import {useState} from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cart-provider';

function App() {

  const [cartIsOpen, setCartIsOpen] = useState(false);

  const showCartHandler = () => {
    setCartIsOpen(true);
  };

  const hideCartHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <CartProvider>
      {cartIsOpen && <Cart onClose={hideCartHandler}/>}
      <Header onOpenCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
