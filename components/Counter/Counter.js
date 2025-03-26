import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import LanguageIcon from '@mui/icons-material/Language';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiSymbolsIcon from '@mui/icons-material/EmojiSymbols';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import useStyles from './counter-style';

function Counter() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const [play, setPlay] = useState(false);
  const { t } = useTranslation('common');

  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.counterWrap}>
      <Container>
        <ScrollAnimation
          animateOnce
          animateIn="fadeIn"
          offset={-300}
          afterAnimatedIn={handlePlay}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.counterInner}
            spacing={6}
          >
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography variant="h3" className={text.title}>
                    {countup(1, play)}
                    &nbsp;
                    {t('counter_month')}
                  </Typography>
                  <Typography component="p" className={text.subtitle}>
                    <CalendarMonthIcon />
                    {t('counter_free')}
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography variant="h3" className={text.title}>
                    +
                    {countup(20, play)}
                    K
                  </Typography>
                  <Typography component="p" className={text.subtitle}>
                    <EmojiSymbolsIcon />
                    {t('counter_users')}
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography variant="h3" className={text.title}>
                    {countup(3, play)}
                  </Typography>
                  <Typography component="p" className={text.subtitle}>
                    <LanguageIcon />
                    {t('counter_providers')}
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Container>
    </div>
  );
}

export default Counter;
