﻿import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { logIn } from '../store/modules/logInOut';


const LoginButtonContainer = (props)=>{
  return (
    <Button
    fullWidth
    variant="contained"
    color="primary"
    className={props.test}
    onClick={(e)=>{ 
      e.preventDefault();
      props.logIn(); 
    }}
  >
    Sign In
  </Button>
);
}


const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(logIn()),
});

export default connect(
  null,
  mapDispatchToProps
)(LoginButtonContainer);