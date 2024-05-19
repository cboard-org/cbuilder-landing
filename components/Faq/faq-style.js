import { makeStyles } from 'tss-react/mui';

const faqStyles = makeStyles({ uniqId: 'faq' })((theme, _params, classes) => ({
  root: {
    position: 'relative'
  },
  text: {
    position: 'relative',
    zIndex: 20
  },
  illustration: {
    position: 'relative',
    margin: theme.spacing(6, 6, 0),
    '& img': {
      display: 'block',
      width: 280,
    }
  },
  accordion: {
    position: 'relative',
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    borderRadius: `${theme.rounded.medium} !important`,
    overflow: 'hidden',
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2, 1, 0),
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    }
  },
  content: {
    [`& .${classes.icon}`]: {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(2)
    }
  },
  expanded: {
    background: theme.palette.secondary.main,
    [`& .${classes.heading}`]: {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0
    },
    [`& .${classes.icon}`]: {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)'
    }
  },
  detail: {
    background: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    '& p': {
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      }
    }
  },
  icon: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default faqStyles;
