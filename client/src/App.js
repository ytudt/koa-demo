import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    setTimeout(() => window.toggleLoad(false));
    return (
      <div className="App">
      <span class="text">母亲节快乐!!!</span>
      </div>
    );
  }
}

export default App;
