import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {Navbar, NavItem} from 'react-materialize';



const NavBar = (props) => {
  let nav = props.user ?
      <div>
        <nav className="pink lighten-3">
          <div className="NavBar1">
            <Link to="/" className="brand-logo center">MayBae</Link>
            <ul className="right">
              <li><a href="/wishlist">❤ Wish List</a></li>
              <li><Link to="" className='NavBar1-link' onClick={props.handleLogout} >LOG OUT</Link></li>
              <li><span className='NavBar1-welcome'>WELCOME, {props.user.name}<br/></span></li>
            </ul>
          </div>
        </nav>
      </div>
      :
      <div>
        <nav className="pink lighten-3">
          <Link to="/" className="brand-logo center">MayBae</Link>
          <div className="NavBar right">
            <ul>
              <li><Link to="/login" className='NavBar1-link'>Log In</Link></li>
              <li><Link to="/signup" className='NavBar1-link'>Register</Link></li>
            </ul>
          </div>
        </nav>
      </div>;
  
  return (
    <div className='a'>
      {nav}
      <div >
      <Navbar right>
        <NavItem className='a'><Link to='/blush'>Blush</Link></NavItem>
        <NavItem className='a'><Link to='/bronzer'>Bronzer</Link></NavItem>
        <NavItem className='a'><Link to='/eyebrow'>Eyebrow</Link></NavItem>
        <NavItem className='a'><Link to='/foundation'>Foundation</Link></NavItem>
        <NavItem className='a'><Link to='/eyeliner'>Eyeliner</Link></NavItem>
        <NavItem className='a'><Link to='/eyeshadow'>Eye Shadow</Link></NavItem>
        <NavItem className='a'><Link to='/mascara'>Mascara</Link></NavItem>
        <NavItem className='a'><Link to='/lip_liner'>Lip Liner</Link></NavItem>
        <NavItem className='a'><Link to='/lipstick'>Lipstick</Link></NavItem>
        <NavItem className='a'><Link to='/nail_polish'>Nail Polish</Link></NavItem>
      </Navbar>
    </div>
    </div>
  );
};

export default NavBar;