import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/Homepage';
import ShopPage from './components/ShopPage';
import Header from './components/Header'
import SignInAndSignOut from './components/Header/SignInAndSignOut';
import { auth } from './firebase/utils/firebase';

// function HatsPage(history) {
//   //  origin ma
//   return (
//     <div>
//       <h1>HATS PAGE</h1>
//       <button>Back to Home</button>
//     </div>
//   )
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user,
      });

      console.log('currentUser:', user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignOut} />
        </Switch>
      </div>
    )
  }
  
}

export default App;
