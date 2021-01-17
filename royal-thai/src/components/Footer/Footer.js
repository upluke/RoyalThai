import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
 


export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='false'  style={{ backgroundColor: '#646C79', height: '30vh'   }} >
            <Typography align="center" variant="h2">Test</Typography>
        
      </Container>
    </React.Fragment>
  );
}

 