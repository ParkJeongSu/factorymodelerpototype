import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { changeId } from '../store/modules/logInOut';


const IdTextFieldContainer = (props)=>{
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="fmId"
      label="Factroy Modeler Id"
      type="fmId"
      id="fmId"
      onChange={(e)=>{ props.changeId(e.target.value);}}
    />
  );
}


const mapDispatchToProps = dispatch => ({
  changeId: (id) => dispatch(changeId(id)),
});

export default connect(
  null,
  mapDispatchToProps
)(IdTextFieldContainer);