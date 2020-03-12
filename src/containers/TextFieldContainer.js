import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

class TextFieldContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      value : ''
    };
  }
  render(){
    return (
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name={this.props.name}
        label={this.props.label}
        id={this.props.label}
        value={this.props[this.props.namef]}
        onChange={(e)=>{
          this.props.onChange(e.target.value);
        }
        }
      >
      </TextField>
    );
  }
}

const mapStateToProps = ({ logInOut }) => ({
  id: logInOut.id,
  name:logInOut.name,
  host:logInOut.host,
  dbid:logInOut.dbid,
  dbpw:logInOut.dbpw,
  userid:logInOut.userid,
  userpw:logInOut.userpw
});


export default connect(mapStateToProps)(TextFieldContainer);