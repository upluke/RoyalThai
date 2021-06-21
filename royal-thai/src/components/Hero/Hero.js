import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
    padding:theme.spacing(16,0,6),
    backgroundColor: '#FB9039',
    height:'50vh'
  },
  buttons:{
    marginTop:theme.spacing(2)
  }
 
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container}   >
            <Typography align="center" variant="h5" color="textPrimary"  >Welcome to</Typography>
            <Typography align="center" variant="h1" align="center" color="textSecondary">Royal Thai Restaurant</Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                   <Button className={classes.buttons} variant="outlined"  color="primary">Login</Button>
                </Grid>
                <Grid item>
                   <Button className={classes.buttons}  variant="outlined" color="inherit">Book</Button>
                </Grid>
              </Grid>
            </div>
            
      </Container>
    </React.Fragment>
    </ThemeProvider>
  );
}