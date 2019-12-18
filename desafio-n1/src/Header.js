import React from 'react';
import logo from './Styles/logo.svg';
import cart from './Styles/cart.svg';
import './Styles/Header.scss';

function Header() {
    return(
        <div className="Header">
            <div className="container">
                <img src={logo} className="Header-logo" alt="logo" />
                <Menu />
                <Search />
                <Cart />
            </div>
        </div>
    );
}

function Menu() {
    return(
        <ul className="Header-menu">
            <li>Games</li>
            <li>Prasentes</li>
            <li>Sale</li>
        </ul>
    );
}

function Search() {
    return(
        <div className="Header-search"></div>
    );
}
function Cart() {
    return(
        <div className="Header-cart">
             <img src={cart} className="cart" alt="cart" />
        </div>
    );
}

export default Header;