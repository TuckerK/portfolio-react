import React, { Component } from 'react';
import Cards from './components/Cards/Cards.js'
import Navigation from './components/Navigation'
// import apps from "../../apps.json";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
