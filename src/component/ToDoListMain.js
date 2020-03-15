// external dependencies
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

//internal dependecies
import AddTodo from './AddTodo';
import TodoList from './TodoList';

import { connect } from 'react-redux';
import { readTodoList,createTodoList,deleteTodoList,checkedTodoList } from '../store/modules/TodoList';

class ToDoListMain extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleClick(todo) {
    this.props.createTodoList(
      {
        task : todo,
        checked :false
      }
    );
  }

  handleRemove(id) {
    this.props.deleteTodoList(id);
  }

  handleCheck(id) {
    this.props.checkedTodoList(id);
  } 

  render() {
    return (
       <Paper 
          // style={{paddingBottom: '20px', marginTop: 100, marginBottom: 100, marginRight: 20, marginLeft: 40}}
          style={{paddingBottom: '20px'}}
          >
          <div 
          style={{
            display: 'flex',    
          }}
          >
            <div style={{marginLeft: '44%'}}>
              <h1 style={{ textAlign: 'center', color: 'grey'}}>
                Todo List 
              </h1>
            </div>
          </div>
          
          <TodoList 
            todos={this.props.todoList}
            handleRemove={this.handleRemove} 
            handleCheck={this.handleCheck} 
          />
          <br />
          <div style={{marginLeft: '5%'}}>
           <AddTodo handleClick={this.handleClick}/>
          </div>
        </Paper>
      
    );
  }
}


const mapStateToProps = ({ TodoList }) => (
  {
    todoList: TodoList.todoList
  });


const mapDispatchToProps = dispatch => ({
  // logOut: () => dispatch(logOut()),
  readTodoList : () => dispatch(readTodoList()),
  createTodoList : (todo) => dispatch(createTodoList(todo)),
  deleteTodoList : (id) => dispatch(deleteTodoList(id)),
  checkedTodoList : (id) =>dispatch(checkedTodoList(id)),
});



export default connect(mapStateToProps,mapDispatchToProps)(ToDoListMain);