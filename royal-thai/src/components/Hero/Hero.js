import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


export default function Hero() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl'  style={{ backgroundColor: '#FB9039', height: '50vh'   }} >
            <Typography align="center" variant="h2">Test</Typography>
            <Button  color="inherit">Login</Button>
      </Container>
    </React.Fragment>
  );
}