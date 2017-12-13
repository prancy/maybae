import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardTitle} from 'react-materialize';

// props.product.filter(product) => product.product_type === :catalog in browser thingy

const Products = (props) => {
  return (
    <div>
        {props.products ?
        //filter takes in a function and checks to see if product.product_type matches props.category, 
        //then .map method goes through each item in the array and changes it to however you want, //it changes depending on the function - for this instance
        // we are changing it to a list item where we list product.name
        <ul>{props.products.filter(product => product.product_type === props.category).map((product, pIdx) => <li key={pIdx}><Link to={`/products/${product.id}`}>{product.name}<img src={product.image_link}/></Link><h2>{product.brand}</h2></li>)}</ul>
        : <h2>LOADING</h2>}
    </div>
  )
}

export default Products;
