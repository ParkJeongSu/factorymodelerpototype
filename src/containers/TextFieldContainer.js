import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { changeId } from '../store/modules/logInOut';

class TextFieldContainer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    // console.log( 'this.props :');
    // console.log(this.props);
    // console.log( 'this.props.name :' + this.props.namef);
    // console.log( 'this.props[this.props.name] :' + this.props[this.props.namef]);
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

const mapDispatchToProps = dispatch => ({
  changeId: (id) => dispatch(changeId(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextFieldContainer);