import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'Blue',
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    // [sizes.down("xl")]: {
    //   width: "80%"
    // },
    // [sizes.down("xs")]: {
    //   width: "75%"
    // }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    // alignItems: "center",
    color: "white",
    // "& a": {
    //   color: "white"
    // }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    // [sizes.down("md")]: {
    //   gridTemplateColumns: "repeat(2, 50%)"
    // },
    // [sizes.down("xs")]: {
    //   gridTemplateColumns: "repeat(1, 100%)",
    //   gridGap: "1.4rem"
    // }
  }
};

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette {...palette} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
