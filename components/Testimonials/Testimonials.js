import React, { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Carousel from 'react-slick';
import QuoteIcon from '@mui/icons-material/FormatQuote';
import { useTranslation } from 'next-i18next';
import { useText, useHidden } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import useStyle from './testi-style';

function Testimonials() {
  const slider = useRef(null);
  const { classes, cx } = useStyle();
  const { classes: hide } = useHidden();
  const { classes: text } = useText();
  const [currentSlide, setCurSlide] = useState(0);
  const theme = useTheme();
  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const testiContent = [
    {
      text: t('testi1'),
      name: t('testi1Name'),
      title: t('testi1Title'),
      avatar: imgAPI.avatar[0],
      logo: '/images/logos/logo01.png',
    },
    {
      text: t('testi2'),
      name: t('testi2Name'),
      title: t('testi2Title'),
      avatar: imgAPI.avatar[1],
      logo: '/images/logos/logo02.png',
    },
    {
      text: t('testi3'),
      name: t('testi3Name'),
      title: t('testi3Title'),
      avatar: imgAPI.avatar[2],
      logo: '/images/logos/logo03.png',
    },
    {
      text: t('testi4'),
      name: t('testi4Name'),
      title: t('testi4Title'),
      avatar: imgAPI.avatar[3],
      logo: '/images/logos/logo04.png',
    },
    {
      text: t('testi5'),
      name: t('testi5Name'),
      title: t('testi5Title'),
      avatar: imgAPI.avatar[4],
      logo: '/images/logos/logo05.png',
    },
    {
      text: t('testi6'),
      name: t('testi6Name'),
      title: t('testi6Title'),
      avatar: imgAPI.avatar[5],
      logo: '/images/logos/logo06.png',
    },
    {
      text: t('testi7'),
      name: t('testi7Name'),
      title: t('testi7Title'),
      avatar: imgAPI.avatar[6],
      logo: '/images/logos/logo07.png',
    },
    {
      text: t('testi8'),
      name: t('testi8Name'),
      title: t('testi8Title'),
      avatar: imgAPI.avatar[7],
      logo: '/images/logos/logo08.png',
    },
    {
      text: t('testi9'),
      name: t('testi9Name'),
      title: t('testi9Title'),
      avatar: imgAPI.avatar[8],
      logo: '/images/logos/logo09.png',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    afterChange: (curSlide) => {
      setCurSlide(curSlide);
    }
  };
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={6}>
          <Grid item md={7} xs={12}>
            <div className={classes.sliderWrap}>
              {!isMobile && (
                <div className={classes.decoration}>
                  <svg width="900px" height="618px" viewBox="0 0 900 618" version="1.1">
                    <defs>
                      <linearGradient x1="78.2441494%" y1="65.8737759%" x2="10.5892887%" y2="33.8596367%" id="linearGradient-1">
                        <stop stopColor={theme.palette.primary.dark} offset="0%" />
                        <stop stopColor={theme.palette.primary.main} offset="100%" />
                      </linearGradient>
                    </defs>
                    <g stroke="none" strokeWidth="0" fill="none" fillRule="evenodd">
                      <path d="M442.972909,617.331576 C569.290851,617.331576 618.618612,525.937324 804.142458,549.304771 C989.666303,572.672218 872.7227,109.743835 732.652282,54.307977 C592.581863,-1.12788075 538.308155,61.549598 304.148084,8.36113994 C69.9880137,-44.8273182 0,167.6782 0,308.489881 C0,450.379879 177.014996,617.331576 442.972909,617.331576 Z" id="Oval" fill="url(#linearGradient-1)" />
                    </g>
                  </svg>
                </div>
              )}
              <Typography variant="h3" align={isMobile ? 'center' : 'left'} className={cx(classes.title, text.title2)}>
                {t('testi_title')}
                <br />
                <strong>
                  {t('testi_titlestrong')}
                </strong>
              </Typography>
              <QuoteIcon className={classes.icon} />
              <div className={classes.carousel}>
                <Carousel ref={slider} {...settings}>
                  {testiContent.map((item, index) => (
                    <div key={index.toString()} className={classes.item}>
                      <div className={classes.inner}>
                        <div className={classes.profile}>
                          <Avatar alt={item.name} src={item.avatar} className={classes.avatar} />
                          <Typography variant="h6" className={classes.name}>
                            {item.name}
                            <span>
                              {item.title}
                            </span>
                          </Typography>
                        </div>
                        <Typography component="p" className={text.paragraph}>
                          {item.text}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </Grid>
          <Grid item md={5} xs={12} className={hide.smDown}>
            {!isMobile && (
              <div className={classes.logoWrap}>
                {testiContent.map((item, index) => (
                  <div className={classes.figureBtn} key={index.toString()}>
                    <ButtonBase onClick={() => slider.current.slickGoTo(index)} className={currentSlide === index ? classes.active : ''}>
                      <img src={item.logo} alt={'logo' + index.toString()} key={index.toString()} />
                    </ButtonBase>
                  </div>
                ))}
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Testimonials;
