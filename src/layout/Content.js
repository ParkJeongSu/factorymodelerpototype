import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Chart from '../component/Chart';
import Deposits from '../component/Deposits';
import Orders from '../component/Orders';
import Copyright from './Footer';
import ToDoListMain from '../component/ToDoListMain';
import NomalTable from '../component/NomalTable';

const Content = (props)=> {
    return (
      <main className={props.classes.content}>
        <div className={props.classes.appBarSpacer} />
        <Container maxWidth="lg" className={props.classes.container}>
          
          {/* Nomal Table */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <NomalTable />
            </Grid>
          </Grid>
          {/* Nomal Table */}
          {/* Home */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <ToDoListMain />
            </Grid>
          </Grid>
          {/* Home */}

          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={props.fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={props.fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={props.classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>

          {/* Home */}

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    );
  }

  export default Content;