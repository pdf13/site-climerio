import React, { Component } from 'react';
import FolderList from './FolderList';
import Slider from './Slider';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.factories = [
      'boca da mata',
      'decorbras',
      'design',
      'dinhos',
      'dmobile',
      'johnatas',
      'manos',
      'marteletto',
      'millenium',
      'prisma',
      'wagnelle',
    ];
  }
  render() {
    return (
      <div className="container">
        <h1>Vilaça representações</h1>
        <Slider />
        <FolderList items={this.factories} />
      </div>
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
