import React from 'react';
import '../Styles/Product.scss';
import Products from '../products.json';
import SeeToo from './SeeToo';
import Shelf from './Shelf';
import Button from './Button';
import mario from '../Styles/images/products/mario.png';
import yoshi from '../Styles/images/products/yoshi.png';
import luigi from '../Styles/images/products/luigi.png';
import peach from '../Styles/images/products/peach.png';
import bowser from '../Styles/images/products/bowser.png';
import plus from '../Styles/images/plus.svg';
import equal from '../Styles/images/equal.svg';

function Product({ id }) {
  let product = Products.find(product => product.id === id);
  let butTogheter = Products[parseInt(id)] ? Products[parseInt(id)] : Products[0];
  let otherProducts = Products.filter(product => product.id !== id);

  function priceBuyToo() {
    let productPromo = parseFloat(product.promo.replace("R$ ", ""));
    let buyTogheterPromo = parseFloat(butTogheter.promo.replace("R$ ", ""));
    return parseFloat(productPromo + buyTogheterPromo - 49.90).toFixed(2);
  }

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
            <span>Pague somente:</span>
            <span>por R${priceBuyToo()}</span>
            <p>Economia de: R$49.90</p>
            <Button />
          </div>
        </div>
      </div>

      <SeeToo products={otherProducts} />
    </div>
  );
}

function Images({ name }) {
  let image;
  switch (name) {
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

  return (
    <div className="Images">
      <img src={image} className="small-image" alt={name} />
      <img src={image} className="normal-image" alt={name} />
    </div>
  );
}

function Info({ product }) {
  let { productName, price, promo } = product;
  return (
    <div className="Info">
      <div className="Info-name"><h2>{productName}</h2></div>
      <div className="Info-price">
        <span> de {price} </span>
        <span> por <span>{promo}</span> </span>
        <Button />
      </div>
      <div className="Info-frete">
        <span>Calcule o Frete</span>
        <div className="cep">
          <input type="text" maxlength="5" size="5" placeholder="00000" 
            onFocus={e => e.target.placeholder = ''} onBlur={e => e.target.placeholder = '00000'}
            onChange={e => setInputFilter(e.target, value => /^\d*\.?\d*$/.test(value))} />
          <input type="text" maxlength="3" size="3" placeholder="000"
            onFocus={e => e.target.placeholder = ''} onBlur={e => e.target.placeholder = '000'}
            onChange={e => setInputFilter(e.target, value => /^\d*\.?\d*$/.test(value))} />
          <Button value="Calcular"/>
        </div>
      </div>
    </div>
  )
}

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

export default Product;
