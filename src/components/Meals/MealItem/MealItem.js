import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import {useContext} from 'react';
import CartContext from '../../../store/cart-state';

const MealItem = (props) => {
    const cartContext = useContext(CartContext);
    const price = `RSD ${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
      cartContext.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      })
    };

  return (
    <li>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
        <MealItemForm onAddToCart = {addToCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem