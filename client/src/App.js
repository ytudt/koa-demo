import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    setTimeout(() => window.toggleLoad(false));
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
