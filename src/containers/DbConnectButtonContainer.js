import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { connectTest } from '../store/modules/DbConnect';


const DbConnectButtonContainer = (props)=>{
  return (
    <Button
    fullWidth
    variant="contained"
    color="primary"
    className={props.test}
    onClick={(e)=>{ 
      e.preventDefault();
      props.dbConnectTest(); 
    }}
  >
    Db Connect Test
  </Button>
);
}


const mapDispatchToProps = dispatch => ({
  dbConnectTest: () => dispatch(connectTest()),
});

export default connect(
  null,
  mapDispatchToProps
)(DbConnectButtonContainer);