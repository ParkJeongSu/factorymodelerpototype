import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { connect } from 'react-redux';
import { selectedDbconfig } from '../store/modules/logInOut';



const AutocompleteContainer = (props)=>{
  const [value, setvalue] = React.useState(0);

  let dbconfigList = props.dbconfigList;

  console.log('AutocompleteContainer');
  console.log(dbconfigList);
  return (
    <Autocomplete
    id="free-solo-demo"
    freeSolo
    options={dbconfigList.map(dbconfig => dbconfig.name)}
    renderInput={params => (
      <TextField {...params} label="DB Connect Info" fullWidth variant="outlined" />
    )}
    onChange={(e)=>{
      console.log('AutocompleteContainer onChange start');
      //e.preventDefault();
      console.log(e.target.value);
      console.log(e.target.name);
      console.log(e);
      props.selectedDbconfig(e.target.value);
      setvalue(e.target.value);
      console.log('AutocompleteContainer onChange end');
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