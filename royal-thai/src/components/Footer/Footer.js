import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({ // style overides at the theme level
  props: {
    MuiContainer: { // MuiContainer is the original component name.
      maxWidth: false
    }
  }
});
 

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <Container   style={{ backgroundColor: '#646C79', height: '30vh',maxWidth:false   }} >
            <Typography align="center" variant="h2">Test</Typography>
        
      </Container>
    </React.Fragment>
    </ThemeProvider>
  );
}

 