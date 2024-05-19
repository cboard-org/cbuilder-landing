import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';
import flag from 'public/images/flag-logo.png';

const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="pt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = makeStyles({ uniqId: 'header' })((theme, _params, classes) => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  invert: {
    color: theme.palette.text.primary,
    [`& .${classes.mobileMenu}`]: {
      [`& .${classes.bar}`]: {
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        },
      }
    },
    '& svg': {
      fill: theme.palette.text.primary,
    },
  },
  fixed: {},
  textBtn: {},
  header: {
    position: 'fixed',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: 'none',
    transition: 'all 0.5s ease-out',
    zIndex: 20,
    '& .MuiContainer-root': {
      padding: 0
    },
    '& > *': {
      [theme.breakpoints.down('lg')]: {
        paddingLeft: 0
      }
    },
    [`&.${classes.fixed}`]: {
      background: darken(theme.palette.primary.dark, 0.3),
      [`& .${classes.logo}`]: {
        '& a': {
          color: 'transparent',
          fontSize: 0,
        },
        '& img': {
          height: 48,
          width: 48,
          marginBottom: 0,
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
        [`& .${classes.button}`]: {
          padding: theme.spacing(0.5, 2)
        }
      },
      [`& .${classes.textBtn}`]: {
        color: theme.palette.common.white + ' !important'
      },
      '& ul': {
        '& li': {
          '& a': {
            color: theme.palette.common.white + ' !important'
          }
        }
      },
      [`& .${classes.setting}`]: {
        [`& .${classes.icon}`]: {
          '& svg': {
            fill: theme.palette.common.white + ' !important'
          }
        }
      },
      [`& .${classes.mobileMenu}`]: {
        [`& .${classes.bar}`]: {
          backgroundColor: theme.palette.common.white,
          '&:after, &:before': {
            backgroundColor: theme.palette.common.white
          },
        }
      }
    },
    [`&.${classes.openDrawer}`]: {
      zIndex: 1600,
    },
    [`&.${classes.invert}`]: {
      [`& .${classes.logo}`]: {
        '& a': {
          color: theme.palette.text.primary,
        }
      },
      [`& .${classes.textBtn}`]: {
        color: theme.palette.text.primary,
      },
      '& ul': {
        '& li': {
          '& a': {
            color: theme.palette.text.primary,
          }
        }
      },
      [`& .${classes.setting}`]: {
        [`& .${classes.icon}`]: {
          '& svg': {
            fill: theme.palette.text.primary,
          }
        }
      }
    },
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(2, 0),
      },
      display: 'flex'
    }
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.common.white,
      alignItems: 'center',
      transition: 'color 0.5s ease-out',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      margin: '0 auto',
      transition: 'all 0.3s ease-out',
      marginBottom: theme.spacing(),
      width: 64,
      height: 64,
      [theme.breakpoints.down('sm')]: {
        height: 48,
        width: 48
      }
    }
  },
  active: {},
  button: {
    width: theme.spacing(20)
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1),
      },
    },
    '& a': {
      color: theme.palette.common.white,
      marginTop: theme.spacing(0.5),
      fontSize: 16,
      fontWeight: theme.typography.fontWeightMedium,
      boxShadow: 'none',
      position: 'relative',
      margin: theme.spacing(0, 1),
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: '6px',
          background: 'none !important',
          '&:after': {
            content: '""',
            height: 5,
            position: 'absolute',
            borderRadius: 5,
            width: '0%',
            margin: '0 auto',
            bottom: -5,
            transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
          },
          '&:hover': {
            transition: 'all 0.3s ease-out',
            opacity: 0.5,
            '&:after': {
              width: 20,
              background: theme.palette.common.white
            }
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.secondary.light,
            '&:after': {
              background: theme.palette.common.white,
              width: 20,
            },
          }
        }
      }
    }
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': {
      ...flagIcon
    }
  },
  icon: {},
  setting: {
    [`& .${classes.icon}`]: {
      transition: 'all 0.3s ease',
      color: theme.palette.common.white,
    },
    [`& .${classes.active}`]: {
      transform: 'rotate(30deg)'
    }
  },
  modeMenu: {
    textTransform: 'capitalize'
  },
  bar: {},
  menu: {},
  openDrawer: {},
  paperNav: {
    width: '100%',
    background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.5) : theme.palette.primary.dark,
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    [`& .${classes.bar}`]: {
      backgroundColor: theme.palette.common.white,
      '&:after, &:before': {
        backgroundColor: theme.palette.common.white
      }
    },
    '&[class*="is-active"]': {
      [`& .${classes.bar}`]: {
        backgroundColor: `${theme.palette.common.white} !important`,
        '&:after, &:before': {
          backgroundColor: `${theme.palette.common.white} !important`
        }
      },
    }
  },
  mobileNav: {
    background: darken(theme.palette.primary.dark, 0.3),
    height: '100%',
    [`& .${classes.menu}`]: {
      padding: theme.spacing(0, 5),
      overflow: 'auto',
      top: 90,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 90px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      },
    }
  },
  menuList: {
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    '& span': {
      fontSize: 24
    }
  },
  dividerSidebar: {
    background: 'rgba(255, 255, 255, 0.2)',
    margin: theme.spacing(3, 0)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default headerStyles;
