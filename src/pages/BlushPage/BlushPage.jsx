import React from 'react';
import { Link } from 'react-router-dom'
import './BlushPage.css';
import NavBar1 from '../../components/NavBar1/NavBar1';

const BlushPage = (props) => {
  return (
    <div>
      <NavBar1
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <br></br>BlushPage<br></br><br></br>
    </div>
  )
}

export default BlushPage;