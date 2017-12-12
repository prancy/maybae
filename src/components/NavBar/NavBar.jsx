import React from 'react';
import NavBar1 from './NavBar1/NavBar1';
import NavBar2 from './NavBar2/NavBar2';


const NavBar = (props) => {
  return(
    <div>
      <div className="NavBar1">
        <NavBar1 {...props}/>
      </div> 
      <div className="NavBar2">
        <NavBar2/>
      </div>
    </div>
  )
}

export default NavBar;