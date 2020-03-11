import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const DbConnectLabelContainer = (props)=>{

  if(props.dbConnectTest===true){
    return (
      <Typography component="div" variant="body1">
        <Box color="success.main">Db Connect Sucess</Box>
      </Typography>
    );
    
  }
  else if(props.dbConnectTest===false){
    return (
      <Typography component="div" variant="body1">
        <Box color="error.main">Db Connect Fail</Box>
      </Typography>
    );
  }
  else{
    return false;
  }

}

const mapStateToProps = ({ DbConnect }) => ({
  dbConnectTest: DbConnect.dbConnectTest,
});

export default connect(mapStateToProps)(DbConnectLabelContainer);