import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header.component';
import { Home } from './components/home/home.component';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />

      </div>
    );
  }
}

export default App;
