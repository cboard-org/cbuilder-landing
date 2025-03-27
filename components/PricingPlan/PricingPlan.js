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

function PricingPlan() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();
  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const feature = {
    free: [
      t('pricing_free_feature1'),
      t('pricing_free_feature2'),
      t('pricing_free_feature3'),
    ],
    basic: [
      t('pricing_basic_feature1'),
      t('pricing_basic_feature2'),
      t('pricing_basic_feature3'),
      t('pricing_basic_feature4'),
      t('pricing_basic_feature5'),
    ],
    standard: [
      t('pricing_standard_feature1'),
      t('pricing_standard_feature2'),
      t('pricing_standard_feature3'),
      t('pricing_standard_feature4'),
      t('pricing_standard_feature5'),
    ],
    pro: [
      t('pricing_pro_feature1'),
      t('pricing_pro_feature2'),
      t('pricing_pro_feature3'),
      t('pricing_pro_feature4'),
      t('pricing_pro_feature5'),
    ],
  };
  
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
              {t('pricing_title')}
            </strong>
          </Title>
        </div>
        <Typography className={cx(classes.subtitle, text.subtitle2)} display="block" align="center">
          {t('pricing_subtitle')}
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
                title={t('pricing_free_title')}
                price={0}
                featureList={feature.free}
                desc={t('pricing_free_desc')}
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
                title={t('pricing_basic_title')}
                price={10}
                featureList={feature.basic}
                desc={t('pricing_basic_desc')}
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
                title={t('pricing_standard_title')}
                price={14}
                featureList={feature.standard}
                desc={t('pricing_standard_desc')}
                type="value"
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
                title={t('pricing_pro_title')}
                price={22}
                featureList={feature.pro}
                desc={t('pricing_pro_desc')}
              />
            </div>
          </ScrollAnimation>
        </div>
      </Container>
    </div>
  );
}

export default PricingPlan;
