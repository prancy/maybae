import React from 'react';
import { Link } from 'react-router-dom';

// props.product.filter(product) => product.product_type === :catalog in browser thingy

const Product = (props) => {
  var product = props.products.filter(product => product.id === Number(props.id))
  console.log(product)
  
  return (
    <div>
        {props.products ?
        <div>This is where the product should actually show,{product.name}</div>
        : <h2>LOADING</h2>}
    </div>
  )
}

export default Product;