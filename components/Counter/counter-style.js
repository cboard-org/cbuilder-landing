import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter' })((theme, _params, classes) => ({
  counterWrap: {
    position: 'relative'
  },
  text: {},
  counterItem: {
    '& p': {
      display: 'flex',
      color: theme.palette.text.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      '& svg': {
        width: 40,
        height: 40,
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
          width: 24,
          height: 24,
          marginRight: theme.spacing(),
        }
      }
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    alignItems: 'center',
    justifyContent: 'center',
    [`& .${classes.text}`]: {
      textAlign: 'center',
      '& h3': {
        position: 'relative',
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
        paddingBottom: theme.spacing(2),
      }
    }
  },
  counterInner: {
    '& > div': {
      position: 'relative',
      '&:after': {
        content: '""',
        borderLeft: `2px solid ${theme.palette.primary.dark}`,
        opacity: 0.2,
        height: 90,
        position: 'absolute',
        right: 0,
        top: 30,
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        },
      }
    },
    '& > div:last-child': {
      '&:after': {
        display: 'none'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
