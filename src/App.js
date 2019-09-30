import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Couscous
          </p>
        </header>
        <div className="App-body">
          <div className="sidebar">
            <a href="#">Link 1</a>
          </div>
          <div className="content">
            This is a test text to see how much test text you can put in a test text.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
