import { makeStyles } from 'tss-react/mui';

const pricingStyles = makeStyles({ uniqId: 'pricing' })(theme => ({
  subtitle: {
    marginBottom: theme.spacing(5)
  },
  decoration: {
    position: 'absolute',
    width: 1280,
    height: 960,
    '& svg': {
      width: 1280,
      height: '100%',
      fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      opacity: 0.2,
      [theme.breakpoints.up('lg')]: {
        transform: 'scale(1.7, 1)',
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  item: {
    '&:hover': {
      zIndex: '21 !important'
    }
  },
  pricingWrap: {
    alignItems: 'center',
    marginTop: theme.spacing(3),
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 5),
    },
    '& > *': {
      margin: theme.spacing(0, -1),
      zIndex: 2,
    },
    '& > *:first-of-type, & > *:last-child': {
      zIndex: 1,
    }
  },
  pop: {
    zIndex: 3,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default pricingStyles;
