import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { connect } from 'react-redux';
import { selectedDbconfig } from '../store/modules/logInOut';

const AutocompleteContainer = (props)=>{
  //const [id, setId] = React.useState(0);

  let dbconfigList = props.dbconfigList;

  console.log('AutocompleteContainer');
  console.log(dbconfigList);
  return (
  <Autocomplete
    options={dbconfigList}
    freeSolo
    getOptionLabel ={ option =>(option.name) }
    
    renderInput={params => {
      return (
        <TextField {...params} label="DB Connect Info" fullWidth variant="outlined"  />
      )
    }
  }
    onChange={(e,value)=>{
      console.log('AutocompleteContainer onChange start');
      //e.preventDefault();
      console.log( 'e.target.value : '+ e.target.value);
      console.log('e.target.name :' + e.target.name);
      console.log(e);
      console.log('value : ');
      console.log(value);
      try {
        props.selectedDbconfig(value.id);
     }
     catch (e) {
      props.selectedDbconfig(null);
     }
      //setId(value.id);
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