import './App.css';
import Header from './components/Layout/Header';
import {Fragment, useState} from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'

function App() {

  const [cartIsOpen, setCartIsOpen] = useState(false);

  const showCartHandler = () => {
    setCartIsOpen(true);
  };

  const hideCartHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <Fragment>
      {cartIsOpen && <Cart onClose={hideCartHandler}/>}
      <Header onOpenCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
