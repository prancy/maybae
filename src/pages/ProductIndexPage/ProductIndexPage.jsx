import React from 'react';
import Catalog from '../../components/Catalog/Catalog'

const ProductIndexPage = (props) => {
  return (
    <div>
      <Catalog products={props.products} category={props.match.params.category}/>
    </div>
  )
}

export default ProductIndexPage;