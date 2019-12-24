import React from 'react';
import '../Styles/Shelf.scss';
import mario from '../Styles/images/products/mario.png';
import yoshi from '../Styles/images/products/yoshi.png';
import luigi from '../Styles/images/products/luigi.png';
import peach from '../Styles/images/products/peach.png';
import bowser from '../Styles/images/products/bowser.png';

function Shelf({name, product}){
    let {productName, price, promo} = product;

    let image;
    switch(name){
        case 'mario':
        image = mario;
        break;
        case 'yoshi':
        image = yoshi;
        break;
        case 'luigi':
        image = luigi;
        break;
        case 'peach':
        image = peach;
        break;
        case 'bowser':
        image = bowser;
        break;
        default:
    }

    return(
        <div className="Shelf">
            <img src={image} className="Shelf-image" alt={name} width="100%" />

            <p>{productName}</p>

            <span>de {price}</span>
            <span>por {promo}</span>
        </div>
    );
}

export default Shelf;