import sizes from './sizes';
import chroma from 'chroma-js';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%',
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '10%',
    },
    [sizes.down('xs3')]: {
      width: '107%',
      paddingTop: '4rem',
    },
    [sizes.down('xs2')]: {
      width: '112%',
    },
    [sizes.down('xs1')]: {
      width: '125%',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: (props) => (chroma(props.color).luminance() <= 0.4 ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)'),
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out',
  },
};

export default styles;
