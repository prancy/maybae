import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar2.css';

const NavBar2 = () => {
  return(
    <div>
      <ul>
        Face
        <li><Link to="/blush">Blush</Link></li>
        <li><Link to="/bronzer">Bronzer</Link></li>
        <li><Link to="/eyebrow">Eyebrow</Link></li>
        <li><Link to="/foundation">Foundation</Link></li>
        Eyes
        <li><Link to="/eyeliner">Eyeliner</Link></li>
        <li><Link to="/eyeshadow">Eyeshadow</Link></li>
        <li><Link to="/mascara">Mascara</Link></li>
        Lips
        <li><Link to="/lipliner">Lipliner</Link></li>
        <li><Link to="/lipstick">Lipstick</Link></li>
        Nails
        <li><Link to="/nailpolish">Nail Polish</Link></li>
      </ul>    
    </div>
    
  )
}

export default NavBar2;