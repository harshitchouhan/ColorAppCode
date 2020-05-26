import sizes from './sizes';

export default {
  '@global': {
    '.fade-exit': {
      opacity: 1,
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: '3.8rem',
  },
  heading: {
    fontSize: '2rem',
  },
  container: {
    width: '60%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginLeft: '-10rem',
    [sizes.down('sm')]: {
      marginLeft: '-2rem',
      width: '60%',
    },
    [sizes.down('xs')]: {
      width: '75%',
      marginLeft: 0,
    },
  },
  nav: {
    display: 'flex',
    width: '112%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white',
      textDecoration: 'none',
    },
    [sizes.down('xs')]: {
      marginLeft: '-1rem',
    },
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 25%)',
    gridGap: '2.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1.4rem',
    },
  },
};
