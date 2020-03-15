﻿// external dependencies
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Todo from './Todo';

class TodoList extends Component {
 
  render() {
    const {
      handleRemove,
      handleCheck,
      todos,
    } = this.props;

    var todoNode = todos.map((todo) => {
    return (
      <Todo 
        key={ todo.id } 
        todo={ todo.task } 
        id = {todo.id}
        checked = { todo.checked }
        handleRemove={handleRemove}
        handleCheck={handleCheck}
      />
    )
  })
    return(
      <List style={{marginLeft: '5%'}}>
      <ul>{ todoNode }</ul>
    </List>
    )
  }
}
  
export default TodoList