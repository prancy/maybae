import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Input, Button, Collection, CollectionItem} from 'react-materialize';
import tokenService from '../../utils/tokenService';

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist: null
    };
  }

  componentDidMount() {
    console.log(tokenService.getToken())
      fetch('/api/users/wishlist', {
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
    })
    .then(res => res.json())
    .then(wishlist => this.setState({wishlist}))
    .catch(err => console.log('err =', err))
  }

  render() {
    console.log(this.state.wishlist)
    return (
      <div>
        {this.state.wishList ? <p>{this.state.wishList[0].name}</p>
        : <h2>No Items in your WishList!</h2>}
      </div>
    );
  }
};

export default Wishlist;