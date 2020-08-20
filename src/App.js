import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import './App.css';

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1>
    <button>Back to Home</button>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
