import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LogoutButtonContainer from '../containers/LogoutButtonContainer';

import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import clsx from 'clsx';

const Header = (props) => {
  return (
    <AppBar position="absolute" className={clsx(props.classes.appBar, props.open && props.classes.appBarShift)}>
    <Toolbar className={props.classes.toolbar}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleDrawerOpen}
        className={clsx(props.classes.menuButton, props.open && props.classes.menuButtonHidden)}
      >
        <MenuIcon />
      </IconButton>
      <Typography component="h1" variant="h6" color="inherit" noWrap className={props.classes.title}>
        Dashboard
      </Typography>
      <IconButton color="inherit">
        <HomeIcon></HomeIcon>
      </IconButton>
      <IconButton color="inherit">
        <ExitToAppIcon></ExitToAppIcon>
      </IconButton>
    </Toolbar>
  </AppBar>
  );
}

export default Header;
