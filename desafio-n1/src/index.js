import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import App from './App';
import Header from './Header';
import Footer from './Footer';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('main'));
ReactDOM.render(<Footer />, document.getElementById('footer'));