import { makeStyles } from 'tss-react/mui';

const newsEventStyle = makeStyles({ uniqId: 'news' })(theme => ({
  root: {
    position: 'relative',
    maxWidth: 1140,
    margin: '0 auto'
  },
  carousel: {
    '& *:focus': {
      outline: 'none'
    },
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(-7),
      '& li': {
        width: 15,
        height: 10,
        border: `1px solid ${theme.palette.text.disabled}`,
        borderRadius: 15,
        opacity: 0.7,
        transition: 'all 0.5s ease-out',
        '&[class="slick-active"]': {
          background: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
          borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
          width: 30,
        }
      },
      '& li button:before': {
        display: 'none'
      }
    }
  },
  item: {
    padding: theme.spacing(),
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default newsEventStyle;
