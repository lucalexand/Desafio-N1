import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';

let cartCounter = 0;

ReactDOM.render(<Header cartCounter={cartCounter} />, document.getElementById('header'));
ReactDOM.render(<App page="product" id="1" />, document.getElementById('main'));
ReactDOM.render(<Footer />, document.getElementById('footer'));