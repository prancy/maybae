import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar1 from '../../components/NavBar/NavBar1/NavBar1';
import NavBar2 from '../../components/NavBar/NavBar2/NavBar2';
import WelcomePage from '../WelcomePage/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import ProductIndexPage from '../ProductIndexPage/ProductIndexPage';

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
  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }
  
  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  /*-------- lifecycle methods ----------*/
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user})
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then(product => product.json())
      .then(product => this.setState({products: product}))
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
              <NavBar1
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
              <NavBar2 />
            </div>
          
            <Switch>
              <Route exact path='/' render={() =>
                <WelcomePage
                  user={this.state.user}
                />
              }/>
              <Route exact path='/signup' render={(props) => 
                <SignupPage
                  {...props}
                  handleSignup={this.handleSignup}
                />
              }/>
              <Route exact path='/login' render={(props) => 
                <LoginPage
                  {...props}
                  handleLogin={this.handleLogin}
                />
              }/>
              <Route exact path='/:category' render={() =>
                <ProductIndexPage
                  user={this.state.user}
                />
              }/>
            </Switch>
            

          </div>
          
        </Router>
      </div>
    )
  }
}

export default App;
