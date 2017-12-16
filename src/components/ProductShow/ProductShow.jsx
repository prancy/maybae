import React from 'react';
import 'react-router-dom';
import {Button, Card} from 'react-materialize';


const Product = (props) => {
  var product = props.products.filter(product => product.id === Number(props.id))[0]
  
  return (
    <div className="container">
      <div className="productShow">
          {props.products.length > 0 ?
            <div>
            <Card title={product.name}>
              <div className="center">
                <br/><br/><img src={product.image_link} height="300" width="300"/>
                </div><br/>
                <p>{product.description}</p><br/><br/>
                <Button onClick={() => props.addWishList(product)}>Add to Wishlist</Button>
            </Card>
            </div>
          : <h2>We're Working on Getting those Products for You!</h2>
          } 
      </div>
    </div>
  )
}



export default Product;