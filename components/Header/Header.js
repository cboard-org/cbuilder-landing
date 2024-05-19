import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { useTranslation } from 'next-i18next';
import logo from 'public/images/saas-logo.svg';
import brand from 'public/text/brand';
import routeLink from 'public/text/link';
import Link from '../Link';
import Settings from './Settings';
import MobileMenu from './MobileMenu';
import useStyles from './header-style';
import navMenu from './menu';

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function Header(props) {
  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 100);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const { classes, cx } = useStyles();
  const theme = useTheme();
  const {
    onToggleDark,
    onToggleDir,
    invert,
  } = props;
  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0]),
    createData(navMenu[1], '#' + navMenu[1]),
    createData(navMenu[2], '#' + navMenu[2]),
    createData(navMenu[3], '#' + navMenu[3], -40),
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Fragment>
      { isTablet && (<MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />) }
      <AppBar
        component="header"
        position="relative"
        id="header"
        className={cx(
          classes.header,
          fixed && classes.fixed,
          invert && classes.invert,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={classes.navMenu}>
              { isTablet && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={cx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')}
                  size="large"
                >
                  <span className="hamburger-box">
                    <span className={cx(classes.bar, 'hamburger-inner')} />
                  </span>
                </IconButton>
              )}
              <div className={classes.logo}>
                {invert ? (
                  <Link href={routeLink.saas.home}>
                    <img src={logo} alt="logo" />
                    {!isTablet && brand.saas.name}
                  </Link>
                ) : (
                  <AnchorLink href="#home">
                    <img src={logo} alt="logo" />
                    {!isTablet && brand.saas.name}
                  </AnchorLink>
                )}
              </div>
              {isDesktop && (
                <Scrollspy
                  items={navMenu}
                  currentClassName="active"
                >
                  {menuList.map(item => (
                    <li key={item.id.toString()}>
                      {invert ? (
                        // eslint-disable-next-line
                        <Button component={Link} href={'/' + item.url}>
                          {t('saas-landing.header_' + item.name)}
                        </Button>
                      ) : (
                        <Button component={LinkBtn} offset={item.offset || 0} href={item.url}>
                          {t('saas-landing.header_' + item.name)}
                        </Button>
                      )}
                    </li>
                  ))}
                  <li>
                    <Button component={Link} href={routeLink.saas.contact}>
                      {t('saas-landing.header_contact')}
                    </Button>
                  </li>
                </Scrollspy>
              )}
            </nav>
            <nav className={classes.navMenu}>
              {!isMobile && (
                <Fragment>
                  <Button component={Link} href={routeLink.saas.login} className={classes.textBtn}>
                    {t('saas-landing.header_login')}
                  </Button>
                  <Button component={Link} href={routeLink.saas.register} variant="contained" color="secondary" className={classes.button}>
                    {t('saas-landing.header_register')}
                  </Button>
                </Fragment>
              )}
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} invert={invert} />
            </nav>
          </div>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

Header.defaultProps = {
  sticky: false,
  invert: false
};

export default Header;
