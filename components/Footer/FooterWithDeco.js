import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Footer from './Footer';
import useStyles from './footer-style';

function FooterWithDeco(props) {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { toggleDir } = props;
  const { t } = useTranslation('common');

  return (
    <div className={classes.footerDeco}>
      <div className={classes.decoration}>
        <svg className={classes.leftDeco}>
          <use xlinkHref="/images/saas/deco-bg-left.svg#main" />
        </svg>
        <svg className={classes.rightDeco}>
          <use xlinkHref="/images/saas/deco-bg-right.svg#main" />
        </svg>
      </div>
      <div className={classes.action}>
        <Typography variant="h4" className={text.title2}>
          {t('saas-landing.footer_waiting')}
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          {t('saas-landing.getstarted')}
        </Button>
      </div>
      <Footer toggleDir={toggleDir} />
    </div>
  );
}

FooterWithDeco.propTypes = {
  toggleDir: PropTypes.func.isRequired
};

export default FooterWithDeco;
