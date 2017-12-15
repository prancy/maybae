import React from 'react';
import Wishlist from '../../components/Wishlist/Wishlist';

const WishListPage = (props) => {
  return (
    <div>
      <Wishlist user={props.user}/>
    </div>
  )
}

export default WishListPage;