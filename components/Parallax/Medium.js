import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxMedium() {
  const { classes } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={classes.innerParallax}>
          <Parallax
            translateY={[-25, 50]}
            className="figure"
          >
            <svg className={classes.plus}>
              <use xlinkHref="/images/decoration/plus.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            translateY={[-20, 20]}
            className="figure"
          >
            <svg className={classes.circle}>
              <use xlinkHref="/images/decoration/circle.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            translateY={[-40, -10]}
            className="figure"
          >
            <svg className={classes.zigzag}>
              <use xlinkHref="/images/decoration/zigzag.svg#main" />
            </svg>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
