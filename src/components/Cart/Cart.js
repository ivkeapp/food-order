import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import {useContext} from 'react';
import CartContext from '../../store/cart-state';
import CartItem from './CartItem'

const Cart = (props) => {

    const cartContext = useContext(CartContext);

    const totalAmount = ` RSD ${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = id => {};
    const cartItemAddhandler = item => {};

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartContext.items.map((item) => (
                <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price} 
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddhandler.bind(null, item)}
                />
            ))}
        </ul>);

      return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div>
                <span>Ukupno</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Zatvori</button>
                {hasItems && <button className={classes.button}>Naruči</button>}
            </div>
        </Modal>
    )
}


export default Cart;