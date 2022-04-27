import {useRef, useState} from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNo = +enteredAmount;

    if(enteredAmount.trim().length === 0 ||
    enteredAmountNo < 1 ||
    enteredAmountNo > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNo);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
        label="Amount" 
        input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '10',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>+ Add</button>
        {!amountIsValid && <p>Molimo vas odaberite odgovarajuću količinu (1-5).</p>}
    </form>
  )
}

export default MealItemForm