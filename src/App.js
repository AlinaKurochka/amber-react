import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
