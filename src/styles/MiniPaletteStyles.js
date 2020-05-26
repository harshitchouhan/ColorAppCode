export default {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1
    },
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '120px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flow-root',
    justifyContent: 'center',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '0.83em',
    position: 'relative',
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.1rem',
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    float: 'left',
  },
  deleteIcon: {
    color: 'white',
    backgroundColor: '#eb3d30',
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '0px',
    top: '0px',
    padding: '10px',
    zIndex: 10,
    opacity: 0,
    transition: 'all .3s ease-in-out'
  },
};
