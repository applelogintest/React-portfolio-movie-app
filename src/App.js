import React, { Component } from 'react';
import Movie from './js/Movie';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie text="hello"></Movie>
      </div>
    );
  }
}

export default App;
