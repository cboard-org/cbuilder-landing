import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'logo' })(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      overflowX: 'auto'
    },
    '& img': {
      height: 48,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      transition: 'all 0.3s ease-out',
      '&:hover': {
        filter: 'none'
      }
    }
  },
  stack: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: '1.5em',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      lineHeight: '1.6em',
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
