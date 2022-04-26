import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItems = <ul>{[{id: 'c1', name: 'Suši', amount: 2, price: 1290.00},
    ].map((item) => <li>{item.name}</li>)}</ul>;

      return (
        <Modal>
            {cartItems}
            <div>
                <span>Ukupno</span>
                <span>2580.00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Zatvori</button>
                <button className={classes.button}>Naruči</button>
            </div>
        </Modal>
    )
}


export default Cart;