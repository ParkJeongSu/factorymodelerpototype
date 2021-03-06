﻿import React from 'react';
import clsx from 'clsx';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Content from '../layout/Content';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {readSidebar} from './../store/modules/Sidebar';
import { connect } from 'react-redux';


import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const  Main = (props)=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  props.readSidebar();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header classes={classes} open={open} handleDrawerOpen={handleDrawerOpen} title={props.tableName}></Header>
        <Sidebar classes={classes} open ={open} handleDrawerClose={handleDrawerClose} ></Sidebar>
        <Content classes={classes} fixedHeightPaper ={fixedHeightPaper} columnList={props.columnList} dataList = {props.dataList}></Content>
      </div>
    );
  }

  // export default Main;

  const mapStateToProps = ({ Content }) => ({
    home : Content.home,
    tableName : Content.tableName,
    columnList :Content.columnList,
    dataList : Content.dataList

  });

  const mapDispatchToProps = dispatch => ({
    readSidebar: () => dispatch(readSidebar()),
  });
  

  export default connect(mapStateToProps,mapDispatchToProps)(Main);