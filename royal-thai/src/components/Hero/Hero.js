import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({ // style overides at the theme level
  props: {
    MuiContainer: { // MuiContainer is the original component name.
      maxWidth: false
    }
  }
});
export default function Hero() {
  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <Container    style={{ backgroundColor: '#FB9039', height: '50vh' }} >
            <Typography align="center" variant="h2">Test</Typography>
            <Button  color="inherit">Login</Button>
      </Container>
    </React.Fragment>
    </ThemeProvider>
  );
}