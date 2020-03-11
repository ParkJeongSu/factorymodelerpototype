import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../layout/Nav';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function Main() {
    return (
      <Grid container spacing={2}>
        {/* Nav*/}
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Nav></Nav>
        </Grid>
  
        {/* Content*/}
        <Grid item lg={9} md={9} sm={9} xs={9}>
          <Paper>Content 2</Paper>
          <Paper>Content 2</Paper>
          <Paper>Content 2</Paper>
          <Paper>Content 2</Paper>
          <Paper>Content 2</Paper>
        </Grid>
  
        {/* Right SideBar*/}
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <Paper>Content 3</Paper>
        </Grid>
  
        {/* Footer */}
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Paper>Footer</Paper>
        </Grid>
  
      </Grid>
    );
  }

  export default Main;