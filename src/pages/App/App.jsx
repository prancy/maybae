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
import ProfilePage from '../ProfilePage/ProfilePage';



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

  addWishList = (product) => {
    console.log('this is in app.jsx', product);
    fetch('/products/like',
      {
        method: 'post',
        body: JSON.stringify({
          apiId: product.id,
          name: product.name,
          image: product.image_link,
          user: this.state.user
        }),
        headers: {
          'Content-Security-Policy': 'block-all-mixed-content',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
  })
  }

  /*-------- lifecycle methods ----------*/
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user})
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
      .then(product => product.json())
      .then(product => {
        this.setState({products: product})
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
              <Route exact path='/profile' render={(props) =>
                <ProfilePage {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
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
                  addWishList={this.addWishList}
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
