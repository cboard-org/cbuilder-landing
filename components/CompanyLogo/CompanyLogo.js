import React, { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useStyles from './logo-style';
import { Grid, Stack } from '@mui/material';

const logos = [
  '/images/logos/cboard-logo.png',
];

function CompanyLogo() {
  const { classes } = useStyles();
  return (
    <Fragment>
      <Stack spacing={0} className={classes.stack}>
      <Typography variant="h5" className={classes.title}>
        Powered by
      </Typography>
    <Container fixed>
      <div className={classes.root}>
        {logos.map((logo, index) => (
          <img src={logo} alt={'logo' + index.toString()} key={index.toString()} />
        ))}
      </div>
    </Container>
    </Stack>
    </Fragment>
  );
}

export default CompanyLogo;
