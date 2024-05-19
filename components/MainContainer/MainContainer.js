import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import Header from '../Header';
import Footer from '../Footer/Footer';
import FooterWithDeco from '../Footer/FooterWithDeco';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'main_container' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  spaceTop: {
    paddingTop: theme.spacing(20)
  },
}));

function MainContainer(props) {
  const { classes } = useStyles();
  const {
    onToggleDark, onToggleDir, children,
    invert, footerDeco
  } = props;

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert={invert}
        />
        {children}
        <div>
          { footerDeco ? (
            <section id="footer">
              <FooterWithDeco toggleDir={onToggleDir} />
            </section>
          ) : (
            <section id="footer">
              <Footer toggleDir={onToggleDir} />
            </section>
          )}
        </div>
      </div>
    </Fragment>
  );
}

MainContainer.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  invert: PropTypes.bool,
  footerDeco: PropTypes.bool,
};

MainContainer.defaultProps = {
  invert: false,
  footerCounter: false,
};

export default MainContainer;
