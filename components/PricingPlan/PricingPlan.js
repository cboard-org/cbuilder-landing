import React from 'react';
import Typography from '@mui/material/Typography';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Title from '../Title';
import PricingCard from '../Cards/Pricing';
import useStyles from './pricing-plan-style';

const feature = {
  basic: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Quisque ut metus'
  ],
  best: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Quisque ut metus',
    'Vivamus sit amet',
    'Cras convallis lacus orci'
  ],
  pro: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Nulla lobortis nunc',
    'Vitae scelerisque',
    'Duis sed augue'
  ],
  enterprise: [
    'Nam sollicitudin dignissim',
    'Pellentesque ac bibendum ',
    'Vestibulum consequat',
    'Donec commodo',
    'Duis tristique metus'
  ],
};

function PricingPlan() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();
  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div className={classes.root}>
      <div className={classes.decoration}>
        <svg
          fill="#cccccc"
        >
          <use xlinkHref="/images/saas/deco-med-bg.svg#main" />
        </svg>
      </div>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Title align="center">
            <strong>
              {t('saas-landing.pricing_title')}
            </strong>
          </Title>
        </div>
        <Typography className={cx(classes.subtitle, text.subtitle2)} display="block" align="center">
          {t('saas-landing.pricing_subtitle')}
        </Typography>
        <div className={classes.pricingWrap}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={200}
            duration={0.4}
          >
            <div className={classes.item}>
              <PricingCard
                title="Basic"
                price={0}
                featureList={feature.basic}
                desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
                type="basic"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={400}
            duration={0.4}
            className={classes.pop}
          >
            <div className={classes.item}>
              <PricingCard
                title="Best Value"
                price={24}
                featureList={feature.best}
                desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
                type="value"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={600}
            duration={0.4}
          >
            <div className={classes.item}>
              <PricingCard
                title="Pro"
                price={54}
                featureList={feature.pro}
                desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={800}
            duration={0.4}
          >
            <div className={classes.item}>
              <PricingCard
                title="Enterprise"
                price={99}
                featureList={feature.enterprise}
                desc=" Interdum et malesuada fames ac ante ipsum primis in faucibus. "
              />
            </div>
          </ScrollAnimation>
        </div>
      </Container>
    </div>
  );
}

export default PricingPlan;
