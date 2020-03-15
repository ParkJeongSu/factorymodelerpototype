import React, { Component } from 'react';
import { blueGrey } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/List';
import Container from '@material-ui/core/Container';

const listElementStyles = {
	color: blueGrey,
	fontSize: 18,
	lineHeight: '24px',
	flexGrow:1,
}

const listElementCheckedStyles = {
	...listElementStyles,
	textDecoration: 'line-through',
}

class Todo extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.onCheck = this.onCheck.bind(this);
	}

	onClick(event) {
		this.props.handleRemove(this.props.id)
	}

	onCheck(event) {
		console.log(this.props.id)
		this.props.handleCheck(this.props.id)
	}

	render() {
		 const { todo } = this.props;

		const listStyles = !this.props.checked ? listElementStyles: listElementCheckedStyles;
		return (
      <ListItem style={{ width: "90%" }}>
		<Container style={{display :"flex"}}>
			<div style={{flexGrow:1}}>
				<li style={listStyles}>{todo}</li>
			</div>
			<IconButton
				onClick={this.onClick}
			>
				<DeleteIcon/>
			</IconButton>
			<Checkbox onClick={this.onCheck} />
		</Container>
        <Divider />
      </ListItem>
    );
	}
} 

export default Todo;