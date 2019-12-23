import React from 'react';
import '../Styles/App.scss';
import Products from '../products.json';

function Product ({id}) {
  let product = Products.find(product => product.id === id);
  return (
    <div className="Product">
      <div className="container">
        <img className="small-image" />
        <img className="normal-image" />
        <Info />
      </div>

      <div className="desc">
        <h2>Descrição do Produto</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

function Info() {
  return(
    <div className="Info">
      <div className="Info-name"></div>
      <div className="Info-price"></div>
      <div className="Info-frete"></div>
    </div>
  )
}

export default Product;
