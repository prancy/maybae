import React from 'react';
import ProductShow from '../../components/ProductShow/ProductShow'

const ProductIndexPage = (props) => {
  return (
    <div>
      <ProductShow products={props.products} id={props.match.params.id}
      addWishList={props.addWishList}/>
    </div>
  )
}

export default ProductIndexPage;

