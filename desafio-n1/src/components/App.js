import React, { Component } from 'react';
import '../Styles/App.scss';
import Products from '../products.json';
import Product from './Product';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {page: this.props.page, id: this.props.id};
  }

  whatProduct = () => {
    let product = Products.find(product => product.id === this.state.id);
    return product.name;
  }

  setPage = (page) => {
    this.setState({page});
  }

  render() {
    let productName = this.whatProduct();
    let linkName = productName.toLowerCase().replace(" ", "");
    
    return (
      <div className="App">
        {/* <ListLink page={this.state.page} productName={productName} linkName={linkName} /> */}
        <aside className="linkMenu">
          <li className="link" to="/n1">N1</li>
          <li className="link" to="/products/actionfigures">Action Figures</li>
          <li className="link" to="/products/actionfigures/supermario">Super Mario</li>
          {/* {this.state.page === 'product' &&
            <CustomLink to={`/products/actionfigures/${linkName}`} product={productName} />
          } */}
        </aside>
        <Product id={this.state.id} />
        
      </div>
    );
  }
}

// function CustomLink ({to, product}) {
//   return(
//       <Link className="link" to={to}>{product}</Link>
//   )
// }

// function Product () {
//   return (
//     <div className="Product">
//       <h2>Produto</h2>
//     </div>
//   );
// }

export default App;
