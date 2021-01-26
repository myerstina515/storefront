import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Footer() {
  return (
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              <p>&copy; 2021 Tina Myers</p>
              <p>Contact: thisismyemail@gmail.com</p>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  )
}