import React, { useState } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTranslation } from 'next-i18next';
import { useTextAlign, useText } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import ParallaxMedium from '../Parallax/Medium';
import ParallaxLarge from '../Parallax/Large';
import Title from '../Title';
import useStyles from './feature-style';

function Feature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const theme = useTheme();

  const [value, setValue] = useState(0);
  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.decoration}>
        <svg
          className={classes.wave}
        >
          <use xlinkHref="/images/saas/deco-bg.svg#main" />
        </svg>
      </div>
      <Container fixed={isDesktop}>
        <ParallaxProvider>
          <div className={classes.item}>
            <Grid container direction={isMobile ? 'column-reverse' : 'row'}>
              <Grid item md={6} xs={12}>
                <div className={classes.illustrationLeft}>
                  <Parallax
                    translateY={isMobile ? [10, 10] : [10, -25]}
                    className="section"
                  >
                    <figure className={cx(classes.figure, classes.screen)}>
                      <img src={imgAPI.saas[0]} alt="screen" />
                    </figure>
                  </Parallax>
                  {!isMobile && (
                    <Parallax
                      translateY={isMobile ? [0, 0] : [-10, 20]}
                      className="section"
                    >
                      <figure className={cx(classes.figure, classes.graphic)}>
                        <img src={imgAPI.saas[1]} alt="illustration" />
                      </figure>
                    </Parallax>
                  )}
                  <ParallaxMedium />
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  offset={-100}
                  delay={200}
                  duration={0.4}
                >
                  <div>
                    <Title align={isMobile ? 'center' : 'left'}>
                      {t('saas-landing.feature_title1')}
                      &nbsp;
                      <strong>
                        {t('saas-landing.feature_titlestrong1')}
                      </strong>
                    </Title>
                    <Typography display="block" component="h6" className={text.subtitle2} align={isMobile ? 'center' : 'left'}>
                      {t('saas-landing.feature_desc1')}
                    </Typography>
                    <Button variant="contained" color="primary" size="large" className={classes.btn}>
                      {t('saas-landing.see_detail')}
                    </Button>
                  </div>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>
          <div className={classes.item}>
            <Grid container>
              <Grid item md={6} xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInRightShort"
                  offset={-100}
                  delay={200}
                  duration={0.4}
                >
                  <div>
                    <Title align={isMobile ? 'center' : 'right'}>
                      {t('saas-landing.feature_title1')}
                      &nbsp;
                      <strong>
                        {t('saas-landing.feature_titlestrong2')}
                      </strong>
                    </Title>
                    <Typography display="block" component="h6" className={text.subtitle2} align={isMobile ? 'center' : 'right'}>
                      {t('saas-landing.feature_desc2')}
                    </Typography>
                    <div className={isMobile ? align.textCenter : align.textRight}>
                      <Button variant="contained" color="primary" size="large" className={classes.btn}>
                        {t('saas-landing.see_detail')}
                      </Button>
                    </div>
                  </div>
                </ScrollAnimation>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.illustrationRight}>
                  <Parallax
                    translateY={isMobile ? [10, 10] : [10, -25]}
                    className="section"
                  >
                    <figure className={cx(classes.figure, classes.screen)}>
                      <img src={imgAPI.saas[2]} alt="screen" />
                    </figure>
                  </Parallax>
                  {!isMobile && (
                    <Parallax
                      translateY={isMobile ? [-25, -25] : [-25, 25]}
                      className="section"
                    >
                      <figure className={classes.graphic}>
                        <img src={imgAPI.saas[3]} alt="illustration" />
                      </figure>
                    </Parallax>
                  )}
                  <ParallaxMedium />
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={cx(classes.item, classes.last)}>
            <Title align="center">
              {t('saas-landing.feature_title3')}
              &nbsp;
              <strong>
                {t('saas-landing.feature_titlestrong3')}
              </strong>
            </Title>
            <div className={classes.tab}>
              <Grid container spacing={6}>
                {!isMobile && <Grid item md={1} xs={12} />}
                <Grid item md={10} xs={12}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                  >
                    <Tab classes={{ root: classes.tabLabel, selected: classes.selected }} label="Pellentesque" />
                    <Tab classes={{ root: classes.tabLabel, selected: classes.selected }} label="Donec" />
                    <Tab classes={{ root: classes.tabLabel, selected: classes.selected }} label="Vestibulum" />
                  </Tabs>
                  <div className={classes.tabContent}>
                    {value === 0 && (
                      <section>
                        <Typography component="h6" display="block" align="center" className={text.subtitle2}>
                          {t('saas-landing.feature_desc3')}
                        </Typography>
                        <div className={classes.illustrationCenter}>
                          <figure className={cx(classes.figure, classes.screen)}>
                            <img src={imgAPI.saas[4]} alt="screen" />
                          </figure>
                        </div>
                      </section>
                    )}
                    {value === 1 && (
                      <section>
                        <Typography component="h6" display="block" align="center" className={text.subtitle2}>
                          {t('saas-landing.feature_desc3')}
                        </Typography>
                        <div className={classes.illustrationCenter}>
                          <figure className={cx(classes.figure, classes.screen)}>
                            <img src={imgAPI.saas[5]} alt="screen" />
                          </figure>
                        </div>
                      </section>
                    )}
                    {value === 2 && (
                      <section>
                        <Typography component="h6" display="block" align="center" className={text.subtitle2}>
                          {t('saas-landing.feature_desc3')}
                        </Typography>
                        <div className={classes.illustrationCenter}>
                          <figure className={cx(classes.figure, classes.screen)}>
                            <img src={imgAPI.saas[6]} alt="screen" />
                          </figure>
                        </div>
                      </section>
                    )}
                    <ParallaxLarge />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </ParallaxProvider>
      </Container>
    </div>
  );
}

export default Feature;
