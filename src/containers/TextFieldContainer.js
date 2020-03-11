import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { changeId } from '../store/modules/logInOut';



class TextFieldContainer extends Component{
  constructor(props){
    super(props);
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
    />
    )
  }
}


const mapDispatchToProps = dispatch => ({
  changeId: (id) => dispatch(changeId(id)),
});

export default connect(
  null,
  mapDispatchToProps
)(TextFieldContainer);