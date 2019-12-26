import React from 'react';
import '../Styles/Product.scss';
import Products from '../products.json';
import SeeToo from './SeeToo';
import Shelf from './Shelf';
import mario from '../Styles/images/products/mario.png';
import yoshi from '../Styles/images/products/yoshi.png';
import luigi from '../Styles/images/products/luigi.png';
import peach from '../Styles/images/products/peach.png';
import bowser from '../Styles/images/products/bowser.png';
import plus from '../Styles/images/plus.svg';
import equal from '../Styles/images/equal.svg';

function Product ({id}) {
  let product = Products.find(product => product.id === id);
  let butTogheter = Products[parseInt(id)];
  let otherProducts = Products.filter(product => product.id !== id);

  return (
    <div className="Product">
      <div className="Product-info">
        <Images name={product.name} />
        <Info product={product} />
      </div>

      <div className="desc">
        <h2>Descrição do Produto</h2>
        <p>{product.description}</p>
      </div>

      <div className="buyToo">
        <h2>Compre Junto</h2>
        <div className="content">
          <Shelf name={product.name} product={product} />
          <img src={plus} className="plus" alt="plus" />
          <Shelf name={butTogheter.name} product={butTogheter} />
          <img src={equal} className="equal" alt="equal" />
          <div className="infoBuy">

          </div>
        </div>
      </div>
      
      <SeeToo products={otherProducts} />
    </div>
  );
}

function Images ({name}) {
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
    <div className="Images">
      <img src={image} className="small-image" alt={name} />
      <img src={image} className="normal-image" alt={name} />
    </div>
  );
}

function Info({product}) {
  let {productName, price, promo} = product;
  return(
    <div className="Info">
      <div className="Info-name"><h2>{productName}</h2></div>
      <div className="Info-price">
        <span> de {price} </span>
        <span> por {promo} </span>
      </div>
      <div className="Info-frete">
        <span>Calcule o Frete</span>
      </div>
    </div>
  )
}

export default Product;
