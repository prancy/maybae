import React from 'react';
import { Link } from 'react-router-dom';
import {Card, Col, Row} from 'react-materialize';

// props.product.filter(product) => product.product_type === :catalog in browser thingy

const Products = (props) => {
  return (
    <div className="productIndex">
        {props.products.length > 0 ?
        //filter takes in a function and checks to see if product.product_type matches props.category, 
        //then .map method goes through each item in the array and changes it to however you want, //it changes depending on the function - for this instance
        // we are changing it to a list item where we list product.name
        <Row>
          {props.products.filter(product => product.product_type === props.category).map((product, pIdx) => 
            <Col m={4}>
              <Card key={pIdx}>
                <Link to={`/products/${product.id}`}>
                  {product.name}
                  <img src={product.image_link} alt="Smiley face" height="100" width="100"/>
                </Link>
              </Card>
            </Col>)
            }
        </Row>
        : 
        <div>LOADING</div>
        }
    </div>
  )
}



export default Products;
