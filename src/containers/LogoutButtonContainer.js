import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { logOut } from '../store/modules/logInOut';


const LogoutButtonContainer = (props)=>{
  return (
    <Button
    fullWidth={false}
    variant="contained"
    color="primary"
    onClick={(e)=>{ 
      e.preventDefault();
      props.logOut(); 
    }}
  >
    LotOut
  </Button>
);
}


const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
});

export default connect(
  null,
  mapDispatchToProps
)(LogoutButtonContainer);