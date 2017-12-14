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
              <li><a href="sass.html">❤ Wish List</a></li>
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
              <li><Link to="sass.html">❤ Wish List</Link></li>
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
        <NavItem><Link to='/blush'>Blush</Link></NavItem>
        <NavItem><Link to='/bronzer'>Bronzer</Link></NavItem>
        <NavItem><Link to='/eyebrow'>Eyebrow</Link></NavItem>
        <NavItem><Link to='/foundation'>Foundation</Link></NavItem>
        <NavItem><Link to='/eyeliner'>Eyeliner</Link></NavItem>
        <NavItem><Link to='/eyeshadow'>Eye Shadow</Link></NavItem>
        <NavItem><Link to='/mascara'>Mascara</Link></NavItem>
        <NavItem><Link to='/lip_liner'>Lip Liner</Link></NavItem>
        <NavItem><Link to='/lipstick'>Lipstick</Link></NavItem>
        <NavItem><Link to='/nail_polish'>Nail Polish</Link></NavItem>
      </Navbar>
    </div>
    </div>
  );
};

export default NavBar;