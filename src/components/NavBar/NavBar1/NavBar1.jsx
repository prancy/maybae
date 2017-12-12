import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar1.css';

const NavBar1 = (props) => {
  let nav = props.user ?
    <div>
      <Link to="/">MayBae</Link>
      <Link to="" className='NavBar1-link' onClick={props.handleLogout} >LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar1-welcome'>WELCOME, {props.user.name}</span>
    </div> :
    <div>
      <Link to="/">MayBae</Link>
      <Link to="/login" className='NavBar1-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar1-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar1'>
      {nav}
    </div>
  );
};

export default NavBar1;