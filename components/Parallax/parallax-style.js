import { makeStyles } from 'tss-react/mui';

const parallaxStyles = makeStyles({ uniqId: 'parallax' })(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
    transform: 'scale(0.8)',
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& [class="figure"]': {
      height: 500,
      width: '100%',
      display: 'block',
      position: 'absolute',
    },
    '& [class="figure"] > svg': {
      position: 'absolute',
    }
  },
  plus: {
    fill: '#ECA426',
    left: -20,
    top: 0,
    width: 100,
    height: 100,
    transform: 'scale(0.5)',
  },
  circle: {
    fill: theme.palette.secondary.main,
    right: 70,
    top: 20,
    width: 120,
    height: 120,
    transform: 'scale(0.5)',
  },
  zigzag: {
    fill: theme.palette.primary.main,
    left: 0,
    bottom: 20,
    width: 250,
    height: 75,
    transform: 'scale(0.5)',
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default parallaxStyles;
