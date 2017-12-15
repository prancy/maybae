const mongoose = require ('mongoose');
require('./../config/database');
const Product = require('./../models/Product');



const fetch = require("node-fetch");
const url =
  "https://makeup-api.herokuapp.com/api/v1/products.json";
fetch(url)
  .then(response => {
    response.json().then(json => {
      json.forEach(data => {
        Product.create({
          name: data.name,
          images: data.image_link,
          price: data.price,
          description: data.description,
          category: data.product_type,
          brand: data.brand,
          colors: data.product_colors
        })
      })
    });
  })
  .catch(error => {
    console.log(error);
  });