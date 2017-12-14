import React from 'react';
import 'react-router-dom';

// props.product.filter(product) => product.product_type === :catalog in browser thingy

const Product = (props) => {
  var product = props.products.filter(product => product.id === Number(props.id))[0]
  
  return (
    <div>
        {props.products.length > 0 ?
        <div>This is where the product should actually show,{product.name}</div>
        : <h2>We're Working on Getting those Products for You!</h2>
        } 
    </div>
  )
}

export default Product;