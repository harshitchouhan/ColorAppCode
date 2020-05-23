import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css';

const style = {
  ColorBox: {
    width: '20%',
    height: (props) => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    '&:hover button': {
      opacity: 1,
    },
  },
  dynamicColor: {
    color: (props) => (chroma(props.background).luminance() <= 0.4 ? 'white' : 'black'),
  },
  seeMoreButton: {
    color: (props) => (chroma(props.background).luminance() <= 0.4 ? 'white' : 'black'),
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
  },
  copyButton: {
    color: (props) => (chroma(props.background).luminance() <= 0.4 ? 'white' : 'black'),
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    opacity: 0,
    textDecoration: 'none',
    transition: 'all 0.3s',
  },
  BoxContent: {
    position: 'absolute',
    width: '75%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    fontSize: '14px',
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    height: '100%',
    width: '100%',
    transform: 'scale(0.1)',
    transition: 'all 0.3s ease-out',
  },
  showOverlay: {
    opacity: '1',
    zIndex: '10',
    transform: 'scale(50)',
    position: 'absolute',
  },
  copyMessage: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    '& h1': {
      fontWeight: '700',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.3)',
      width: '100%',
      textAlign: 'center',
      margin: '0',
      padding: '1rem',
      textTransform: 'uppercase',
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100',
    },
  },
  showMessage: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, background, moreUrl, showingFullPalette, classes } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} />
          <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
            <h1 className={classes.dynamicColor}>Copied!</h1>
            <p className={classes.dynamicColor}>{this.props.background}</p>
          </div>
          <div>
            <div className={classes.BoxContent}>
              <span className={classes.dynamicColor}>{name} </span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMoreButton}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(style)(ColorBox);
