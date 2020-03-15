import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddTodo extends Component {
	
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
		this.state = {
			inputValue: '',
		}
	}

	onClick(event) {
		event.preventDefault();
		var todo = this.state.inputValue;
		console.log(todo);
		if(todo ==='') return 
		else {
			this.props.handleClick(todo);
			console.log(this.state.inputValue);
			this.setState({inputValue : ''});
			console.log(this.state.inputValue);
		}
	}

	render() {
		return (
      <div>
        <form id="myForm">
          <Paper style={{ width: "90%", leftMargin: "15px" }} z-index={1} >
            <div style={{ marginLeft: "10px" }}>
              <TextField
			
                placeholder="What needs to be done?"
                className="AddText"
                fullWidth={true}
				onChange={e => this.setState({ inputValue: e.target.value })}
				value={this.state.inputValue}
				></TextField>
            </div>
			
          </Paper>
          <br />
          <Button
            variant="contained"
            type="submit"
            label="Add todo"
            color="primary"
            onClick={this.onClick}
          >
            Add Todo
          </Button>
        </form>
      </div>
    );
	}
}

export default AddTodo;