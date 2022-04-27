import { Fragment } from "react";
import headerImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Dobar has</h1>
            <HeaderCartButton onClick={props.onOpenCart} />
        </header>
        <div className={classes['header-image']}>
            <img src={headerImage} alt='Ukusna klopa' />
        </div>
    </Fragment>
    );
};

export default Header;