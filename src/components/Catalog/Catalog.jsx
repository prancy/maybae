import React from 'react';
import { Link } from 'react-router-dom';
import {Card, Col, Row} from 'react-materialize';

const Products = (props) => {
  return (
    <div className="productIndex"><br/><br/>
      {props.products.length > 0 ?
        <Row>
          {props.products.filter(product => product.product_type === props.category).map((product, pIdx) => 
            <Col m={4}>
              <Card title={product.name} key={pIdx}>
                <div className="center">
                  <Link to={`/products/${product.id}`}>
                    <img src={product.image_link} height="200" width="200"/>
                  </Link>
                </div>
              </Card>
            </Col>)
          }
        </Row>
        : 
        <div>
          <h2 className="center">We're Working on It!</h2>
          <center><img src="https://i.imgur.com/8L2CwzP.gif" /></center>
        </div>
      }
    </div>
  )
}



export default Products;
