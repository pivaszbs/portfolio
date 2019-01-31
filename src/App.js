import React, { Component } from 'react';
import Header from './components/header-footer/Header';
import MainInfo from './components/main/MainInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainInfo/>
      </div>
    );
  }
}

export default App;
