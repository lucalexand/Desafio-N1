import React, { Component } from 'react';
import logo from '../Styles/images/logo.svg';
import cart from '../Styles/images/cart.svg';
import '../Styles/Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { cartCounter: this.props.cartCounter };
    }

    render() {
        return(
            <div className="Header">
                <div className="container">
                    <img src={logo} className="Header-logo" alt="logo" />
                    <Menu />
                    <Search />
                    <Cart cartCounter={this.state.cartCounter} />
                </div>
            </div>
        );
    }
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
function Cart({cartCounter}) {
    return(
        <div className="Header-cart" value={cartCounter}>
             <img src={cart} className="cart" alt="cart" />
        </div>
    );
}

export default Header;