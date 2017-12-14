//importing the basics
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import userService from '../../utils/userService';

//components
import NavBar from '../../components/NavBar/NavBar'
import BottomFooter from '../../components/BottomFooter/BottomFooter';

//pages
import './App.css';
import WelcomePage from '../WelcomePage/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ProductIndexPage from '../ProductIndexPage/ProductIndexPage';
import ProductShowPage from '../ProductShowPage/ProductShowPage';



/*------ state initializer -----*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
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
      .then(product => {
        this.setState({products: product})
        console.log('this.state =', this.state)
      })
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
              <Route exact path='/:category' render={(props) =>
                <ProductIndexPage {...props}
                  user={this.state.user}
                  products={this.state.products}
                />
              }/>
              <Route exact path='/products/:id' render={(props) =>
                <ProductShowPage {...props}
                  user={this.state.user}
                  products={this.state.products}
                />
              }/>
            </Switch>
            <BottomFooter/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
