import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/Homepage';
import ShopPage from './components/ShopPage';
import Header from './components/Header'

// function HatsPage(history) {
//   //  origin ma
//   return (
//     <div>
//       <h1>HATS PAGE</h1>
//       <button>Back to Home</button>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
