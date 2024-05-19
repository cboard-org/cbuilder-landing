import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const cardsStyles = makeStyles({ uniqId: 'cards' })((theme, _params, classes) => ({
  pricing: {
    position: 'relative',
    borderRadius: 40,
    overflow: 'hidden',
    textAlign: 'center',
    zIndex: 2,
    border: '1px solid transparent',
    maxWidth: 300,
    marginBottom: theme.spacing(3),
    '& ul': {
      padding: theme.spacing(0, 2),
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      '& li': {
        listStyle: 'none',
        fontSize: 16,
        textAlign: 'center',
        padding: theme.spacing(),
        borderBottom: `2px dashed ${theme.palette.divider}`,
        '&:last-child': {
          borderBottom: 'none'
        }
      }
    },
    '&:hover': {
      boxShadow: `0 0 20px 5px ${theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light}`,
      border: `1px solid ${theme.palette.primary.main}`
    }
  },
  title: {
    padding: theme.spacing(5, 0, 2),
    textTransform: 'uppercase',
    fontSize: 24,
    position: 'relative',
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    '& p': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& h4': {
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'none',
      marginTop: theme.spacing(2)
    }
  },
  button: {},
  btnArea: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    background: alpha(theme.palette.divider, 0.04),
    [`& .${classes.button}`]: {
      marginTop: theme.spacing(2)
    },
    [`& .${classes.desc}`]: {
      fontSize: 14,
    }
  },
  basic: {
    [`& .${classes.title}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
    },
    [`& .${classes.btnArea}`]: {
      background: alpha(theme.palette.secondary.main, 0.3),
    },
    '&:hover': {
      borderColor: theme.palette.secondary.main
    }
  },
  value: {
    zIndex: 20,
    border: `1px solid ${theme.palette.primary.main}`,
    [`& .${classes.title}`]: {
      paddingBottom: 0,
      marginBottom: theme.spacing(8),
      color: theme.palette.common.white,
      height: 90,
      paddingTop: 40,
      '& h4': {
        position: 'relative',
        color: theme.palette.common.white,
      },
      '& p': {
        position: 'relative',
      },
      '&:before': {
        content: '""',
        width: '160%',
        position: 'absolute',
        borderRadius: '50%',
        bottom: -60,
        height: 400,
        left: '-30%',
        background: `linear-gradient(-185deg, ${theme.palette.primary.main} 60%, ${theme.palette.primary.dark} 100%)`,
      }
    },
    '& ul': {
      paddingTop: theme.spacing(2)
    },
    '&:hover': {
      boxShadow: `0 0 20px 5px ${theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light}`,
    }
  },
  news: {
    display: 'flex',
    direction: 'ltr',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    '& figure': {
      overflow: 'hidden',
      borderRadius: theme.rounded.small,
      margin: 0,
      marginRight: theme.spacing(2),
      width: 120,
      height: 140,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        height: 'auto',
        maxHeight: 200,
        margin: theme.spacing(2, 1)
      },
      '& img': {
        maxHeight: '100%',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          height: 'auto',
        },
      }
    }
  },
  desc: {
    flex: 1,
    '& p': {}
  },
  text: {
    padding: theme.spacing(0, 1.5),
    maxWidth: 400
  },
  type: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary
  },
  btn: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default cardsStyles;
