import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { selectedDbconfig } from '../store/modules/logInOut';


const FormControlContainer = (props)=>{
  const [value, setvalue] = React.useState(0);

  let dbconfigList = props.dbconfigList.map((dbconfig)=>{
    return (<MenuItem key={dbconfig.id} value={dbconfig.id}>{dbconfig.name}</MenuItem>);
  });
  console.log('FormControlContainer');
  console.log(dbconfigList);
  return (
    <FormControl variant="outlined" fullWidth>
    <InputLabel>
      DB Connect Info
    </InputLabel>
    <Select
    value={value}
    onChange={(e)=>{
      //e.preventDefault();
      console.log(e.target.value);
      console.log(e.target.name);
      console.log(e);
      props.selectedDbconfig(e.target.value);
      setvalue(e.target.value);
      return e.target.value;
    }}>
      {dbconfigList}
    </Select>
  </FormControl>
  );
}


// class FormControlContainer extends Component{
//   constructor(props){
//     super(props);
//   }

//   render(){
//     let dbconfigList = props.dbconfigList.map((dbconfig)=>{
//       return (<MenuItem key={dbconfig.id} value={dbconfig.id}>{dbconfig.name}</MenuItem>);
//     });
//     console.log('FormControlContainer');
//     console.log(dbconfigList);
//     <FormControl variant="outlined" fullWidth>
//       <InputLabel>DB Connect Info</InputLabel>
//       <Select
//         onChange={e => {
//           //e.preventDefault();
//           console.log(e.target.value);
//           console.log(e.target.name);
//           console.log(e);
//           props.selectedDbconfig(e.target.value);
//         }}
//       >
//         {dbconfigList}
//       </Select>
//     </FormControl>;
//   }
// }


const mapStateToProps = ({ logInOut }) => ({
  dbconfigList: logInOut.dbconfigList,
});

const mapDispatchToProps = dispatch => ({
  selectedDbconfig : (id) => dispatch(selectedDbconfig(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(FormControlContainer);