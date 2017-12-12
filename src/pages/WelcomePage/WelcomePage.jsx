import React from 'react';
import { Link } from 'react-router-dom'
import './WelcomePage.css';
import NavBar1 from '../../components/NavBar1/NavBar1';

const WelcomePage = (props) => {
  return (
    <div>
      <NavBar1
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <br></br>WelcomePage<br></br><br></br>
    </div>
  )
}

export default WelcomePage;