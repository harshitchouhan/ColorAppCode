import sizes from './sizes';

export default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    height: '6vh',
    [sizes.down('xs')]: {
      height: '10vh',
    },
  },
  NavbarSpan: {
    [sizes.down('xs')]: {
      paddingLeft: '.5rem'
    },
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: "'Roboto', sans-serif",
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
    [sizes.down('xs')]: {
      display: 'none',
    },
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent',
    },
    '& .rc-slider-rail': {
      height: '6px',
    },
    '& .rc-slider-handle, .rc-slider-handle:focus,.rc-slider-handle:active,.rc-slider-handle:hover': {
      backgroundColor: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      marginTop: '-4px',
    },
    [sizes.down('sm')]: {
      width: '150px',
    },
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
    [sizes.down('xs')]: {
      marginRight: '.7rem',
    },

    "& .MuiInputBase-root": {
      [sizes.down('xs')]: {
        fontSize: '.7rem !important',
      },
    }
  },
};
