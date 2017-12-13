import React from 'react';
import { Link } from 'react-router-dom';

// props.product.filter(product) => product.product_type === :catalog in browser thingy

const Products = (props) => {
  return (
    <div>
        {props.products ?
        //filter takes in a function and checks if product--------- filter is checking to see if product.product_type matches props.category, then .map method goes through each item in the array and changes it to however you want, then we decide how to change it depending on the function - for this instance, we are changing it to a list item where we list product.name
        <ul>{props.products.filter(product => product.product_type === props.category).map((product, pIdx) => <li key={pIdx}><Link to={`/products/${product.id}`}>{product.name}</Link><h2>{product.brand}</h2></li>)}</ul>
        : <h2>LOADING</h2>}
    </div>
  )
}

export default Products;