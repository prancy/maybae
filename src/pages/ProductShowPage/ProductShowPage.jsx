import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProductShowPage extends Component {
  constructor(props) {
    super();
    this.state = {
      products: {}
    }
  }

  componentDidMount() {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then(product => product.json())
      .then(product => this.setState({products: product}))
  }

  getProduct = (product) => {
    
  }

  render() {
    return (
      <div>
        this is the product show page
      </div>
    );
  }
};

export default ProductShowPage;

