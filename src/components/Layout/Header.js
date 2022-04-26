import { Fragment } from "react";
import headerImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Dobar has</h1>
            <button>Cart</button>
        </header>
        <div className={classes['header-image']}>
            <img src={headerImage} alt='Ukusna klopa' />
        </div>
    </Fragment>
    );
};

export default Header;