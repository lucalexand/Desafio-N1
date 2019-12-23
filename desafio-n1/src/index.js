import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('main'));
ReactDOM.render(<Footer />, document.getElementById('footer'));