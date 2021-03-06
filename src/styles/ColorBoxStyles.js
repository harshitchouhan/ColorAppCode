import chroma from 'chroma-js';
import sizes from './sizes';

export default {
  ColorBox: {
    width: '20%',
    height: (props) => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    float: 'left',
    position: 'relative',
    cursor: 'pointer',
    '&:hover button': {
      opacity: 1,
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: (props) => (props.showingFullPalette ? '20%' : '33.3333%'),
    },
    [sizes.down('md')]: {
      width: '50%',
      height: (props) => (props.showingFullPalette ? '10%' : '20%'),
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: (props) => (props.showingFullPalette ? '8%' : '10%'),
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
    fontSize: '.75rem',
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
    fontSize: '.75rem',
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
    fontSize: '.75rem',
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
      [sizes.down('xs')]: {
        fontSize: '5rem',
      },
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
