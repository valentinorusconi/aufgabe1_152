import React, { Component } from 'react';
import './App.css';

import Carousel from './components/Carousel';
import Audio from './components/Audio';
import Video from './components/Video';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Modul 152</h1>
        </header>
        <Carousel />
        <Audio />
        <Video />
        <Table />
      </div>
      
    );
  }
}

export default App;