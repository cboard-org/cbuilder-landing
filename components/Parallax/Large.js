import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxLarge() {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.parallaxWrap, classes.dotsWrap)}>
      <ParallaxProvider>
        <div className={cx(classes.innerParallax, classes.large)}>
          <Parallax
            translateY={[10, 50]}
            className="figure"
          >
            <svg className={classes.plus}>
              <use xlinkHref="/images/decoration/plus.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            translateY={[20, 50]}
            className="figure"
          >
            <svg className={classes.circle}>
              <use xlinkHref="/images/decoration/circle.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            translateY={[10, 20]}
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
