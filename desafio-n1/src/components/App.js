import React, { Component } from 'react';
import '../Styles/App.scss';
import Products from '../products.json';
import Product from './Product';
import Shelf from './Shelf';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import arrow from '../Styles/images/arrow.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {page: this.props.page, 
                  id: this.props.id};
  }

  whatProduct = () => {
    let product = Products.find(product => product.id === this.state.id);
    return product.fullName;
  }

  changeTab = (tabId) => {
    console.log(tabId);
    let idTab = tabId.replace("#", "");
    if(idTab == 3)
     this.setState({page: "product"})
    else
     this.setState({page: "actionfigure"});
  }

  selectProduct = (product) => {
    this.setState({page: "product", id: product.id});
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

  render() {
    let productName = this.whatProduct();
    
    return (
      <div className="App">
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
                <p>Tab 1 content</p>
              </TabPanel>
              <TabPanel tabId="#2">
                <div className="Shelfs">
                  {this.createShelf()}
                </div>
              </TabPanel>
              <TabPanel tabId="#3">
                <Product id={this.state.id} />
              </TabPanel>
            </div>
          </section>
        </TabProvider>
        
      </div>
    );
  }
}

export default App;
