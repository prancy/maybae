import React from 'react';
import { Link } from 'react-router-dom';

// props.product.filter(product) => product.product_type === :catalog in browser thingy

const Products = (props) => {
  return (
    <div>
        {props.products ?
        <ul>{props.products.filter(product => product.product_type === props.category).map((product, pIdx) => <li key={pIdx}>{product.name}</li>)}</ul>
        : <h2>LOADING</h2>}
         {/* <Link to={`/products/${product.id}`}>{product.name}</Link></li>) */}
    </div>
  )
}

export default Products;