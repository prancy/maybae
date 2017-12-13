import React from 'react';
import ProductShow from '../../components/ProductShow/ProductShow'

const ProductIndexPage = (props) => {
  return (
    <div>
      <br></br>ProductShowPage<br></br><br></br>
      <ProductShow products={props.products} id={props.match.params.id}/>
    </div>
  )
}

export default ProductIndexPage;

