import React from 'react';
import NavBar1 from './NavBar1/NavBar1';
import NavBar2 from './NavBar2/NavBar2';


const NavBar = (props) => {
  return(
    <div>
      <NavBar1 {...props}/>
      <NavBar2/>
    </div> 
  )
}

export default NavBar;