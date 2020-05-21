import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColor';
import { generatePalettes } from './colorHelpers';

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalettes(seedColors[4])} />
      </div>
    );
  }
}

export default App;
