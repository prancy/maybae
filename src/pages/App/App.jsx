import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import WelcomePage from '../WelcomePage/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import ProductIndexPage from '../ProductIndexPage/ProductIndexPage';
import Footer from '../../components/Footer/Footer';

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
              <NavBar
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            </div>
            <Switch>
              <Route exact path='/' render={() =>
                <WelcomePage
                  user={this.state.user}
                />
              }/>
              <Route exact path='/products' render={() =>
                <ProductIndexPage
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
            <Footer
            />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
