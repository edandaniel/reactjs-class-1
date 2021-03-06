import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
          <Routes />
        </div>
      </Router>
    );
  }
}
//https://api.mercadolibre.com/sites/MLB/search?q=iphone
export default App;
