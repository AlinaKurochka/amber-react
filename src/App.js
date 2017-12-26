import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Advertising from './components/Advertising';
import Works from './components/Works';

import './css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Advertising />
        <Works />
        <Amber />
      </div>
    );
  }
}

export default App;
