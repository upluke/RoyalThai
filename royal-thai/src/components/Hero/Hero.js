import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({ // style overides at the theme level
  props: {
    MuiContainer: { // MuiContainer is the original component name.
      maxWidth: false
    }
  }
});
const useStyles = makeStyles((theme) => ({
  container: {
    padding:'10%',
    backgroundColor: '#FB9039',
    height:'50vh'
  },
 
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container}   >
            <Typography align="center" variant="h5">Welcome to</Typography>
            <Typography align="center" variant="h1">Royal Thai Restaurant</Typography>
            <Button  color="inherit">Login</Button>
      </Container>
    </React.Fragment>
    </ThemeProvider>
  );
}