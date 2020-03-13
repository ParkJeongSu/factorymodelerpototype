import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { connect } from 'react-redux';
import { selectedDbconfig } from '../store/modules/logInOut';

const AutocompleteContainer = (props)=>{
  let dbconfigList = props.dbconfigList;
  return (
    <Autocomplete
      options={dbconfigList}
      freeSolo
      getOptionLabel={option => option.name}
      renderInput={params => {
        return (
          <TextField
            {...params}
            label="DB Connect Info"
            fullWidth
            variant="outlined"
          />
        );
      }}
      onChange={(e, value) => {
        try {
          props.selectedDbconfig(value.id);
        } catch (e) {
          props.selectedDbconfig(null);
        }
      }}
      onInputChange={(e,value,reason)=>{
        props.onInputChange(e.target.value);
        if("clear"==reason){
          props.selectedDbconfig(null);
        }
        
      }}
    />
  );
}


const mapStateToProps = ({ logInOut }) => ({
  dbconfigList: logInOut.dbconfigList,
});

const mapDispatchToProps = dispatch => ({
  selectedDbconfig : (id) => dispatch(selectedDbconfig(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(AutocompleteContainer);