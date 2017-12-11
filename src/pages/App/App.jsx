import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar1 from '../../components/NavBar1/NavBar1';
import NavBar2 from '../../components/NavBar2/NavBar2';

/*------ state initializer -----*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }


  /*---------- Helper Methods ----------*/

  /*---------- Callback Methods ----------*/

  /*-------- lifecycle methods ----------*/



  render() {
    return (
      <div>
        <NavBar1 />
        <NavBar2 />
        <Switch>
        </Switch>
      </div>
    )
  }
}

export default App;
