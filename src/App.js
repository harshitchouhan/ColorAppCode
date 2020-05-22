import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColor';
import { generatePalettes } from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => <SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalettes(this.findPalette(routeProps.match.params.paletteId))} />} />
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
        <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalettes(this.findPalette(routeProps.match.params.id))} />} />
      </Switch>
      // <div>
      //   <Palette palette={generatePalettes(seedColors[3])} />
      // </div>
    );
  }
}

export default App;
