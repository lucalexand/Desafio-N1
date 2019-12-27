import React, { Component } from 'react';
import '../Styles/App.scss';
import Products from '../products.json';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import Modal from './Modal';
import Shelf from './Shelf';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import arrow from '../Styles/images/arrow.svg';
import success from '../Styles/images/success.svg';
import underConstruction from '../Styles/images/under construction.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.page,
      id: this.props.id,
      cartCounter: 0,
      show: false,
      show2: false
    };
  }

  whatProduct = () => {
    let product = Products.find(product => product.id === this.state.id);
    return product.fullName;
  }

  changeTab = (tabId) => {
    console.log(tabId);
    let idTab = tabId.replace("#", "");
    if (idTab == 3)
      this.setState({ page: "product" })
    else
      this.setState({ page: "actionfigure" });
  }

  selectProduct = (product) => {
    console.log(product.id);
    this.setState({ page: "product", id: product.id });
  }

  createShelf = () => {
    let shelfs = [];
    let count = 0
    for (let product of Products) {
      shelfs.push(
        <div id={`Product_${++count}`} className="Product" onClick={e => this.selectProduct(product)}>
          <Shelf name={product.name} product={product} />
        </div>
      );
    }
    return shelfs;
  }

  updateCart = () => {
    let cartCounter = this.state.cartCounter;
    cartCounter++;
    this.setState({ cartCounter });
  }

  showModal = (e) => {
    this.setState({
      show: !this.state.show
    });
  };
  showModal2 = (e) => {
    this.setState({
      show2: !this.state.show2
    });
  };

  render() {
    let productName = this.whatProduct();

    return (
      <div className="App">
        <Header cartCounter={this.state.cartCounter} />
        <div className="main">
          <TabProvider
            defaultTab="#3"
            onChange={tabId => this.changeTab(tabId)}>
            <section className="tabs">
              <TabList className="tabList">
                <Tab tabFor="#1" className="tab">N1</Tab>
                <span className="divider"><img src={arrow} className="arrow" alt="arrow" /></span>
                <Tab tabFor="#2" className="tab">Action Figures</Tab>
                {this.state.page === "product" &&
                  <span className="divider"><img src={arrow} className="arrow" alt="arrow" /></span>}
                {this.state.page === "product" &&
                  <Tab tabFor="#3" className="tab">{productName}</Tab>}
              </TabList>
              <div className="wrapper">
                <TabPanel tabId="#1">
                  <div className="N1">
                    <img src={underConstruction} className="underConstruction" alt="Under Construction" />
                    <span>Essa página está em desenvolvimento.</span>
                  </div>
                </TabPanel>
                <TabPanel tabId="#2">
                  <div className="Shelfs">
                    {this.createShelf()}
                  </div>
                </TabPanel>
                <TabPanel tabId="#3">
                  <Product id={this.state.id} updateCart={this.updateCart} 
                    showModal={this.showModal} showModal2={this.showModal2} />
                </TabPanel>
              </div>
            </section>
          </TabProvider>

          <Modal onClose={this.showModal} show={this.state.show}>
            <img src={success} className="success" alt="success" />
            <span>Produto Adicionado</span>
            <span>ao carrinho</span>
          </Modal>

          <Modal onClose={this.showModal2} show={this.state.show2}>
            <img src={underConstruction} className="underConstruction" alt="Under Construction" />
            <span>A funcionalidade está em desenvolvimento.</span>
          </Modal>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
