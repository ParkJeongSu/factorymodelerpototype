﻿import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../component/listItems';

import NestedList from '../component/NestedList';

import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { connect } from 'react-redux';
import {readSidebar} from '../store/modules/Sidebar';

const Sidebar = (props)=>{
  // props.getMenuList();
  // props.getAdminMenuList();
  props.readSidebar();
    return (
        <Drawer
        variant="permanent"
        classes={{
          paper: clsx(props.classes.drawerPaper, !props.open && props.classes.drawerPaperClose),
        }}
        open={props.open}
      >
        <div className={props.classes.toolbarIcon}>
          <IconButton onClick={props.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/* <NestedList menuList = {menuList} ></NestedList> */}
        
        {/* <List>{mainListItems}</List> */}
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
    );
}

// export default Sidebar;


// const mapStateToProps = ({ Sidebar }) => ({
//   // menuList: Sidebar.menuList
// });


const mapDispatchToProps = dispatch => ({
  readSidebar : () =>dispatch(readSidebar())
  // getAdminMenuList : ()=>dispatch(getAdminMenuList()),
});

export default connect(null,mapDispatchToProps)(Sidebar);