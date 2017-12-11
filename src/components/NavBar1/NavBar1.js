import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return(
    <header>
      <h1>
        <Link className='home-link'to="/products">MaeBae</Link>
        <Link to="/checkout">Cart</Link>
      </h1>
    </header>
  )
}

export default NavBar;