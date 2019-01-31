import React, { Component } from 'react';
import Header from './components/header-footer/Header';
import MainInfo from './components/main/MainInfo';
import Particles from 'react-particles-js';

class App extends Component {
  params = {
    particles : {
      number : {
        value : 100,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MainInfo />

        <Particles
          style={{position:"absolute", top:"0", left:"0"}}
          params={this.params}/>
      </div>
    );
  }
}

export default App;
