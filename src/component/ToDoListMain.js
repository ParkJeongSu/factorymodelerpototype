// external dependencies
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

//internal dependecies
import AddTodo from './AddTodo';
import TodoList from './TodoList';


class ToDoListMain extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleClick(todo) {
    console.log(this.state)
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id:this.state.todos.length,
          task:todo,
          checked:false,
        }
      ]

    })
  }

  handleRemove(id) {
      const finalTodos = this.state.todos.filter((todo) => {
        return todo.id !== id;
      });
      console.log(finalTodos);
      this.setState({
        todos: finalTodos
      });
  }

  handleCheck(id) {
    const finalTodos = this.state.todos.map((todo) => {
        if(todo.id === id){
          todo.checked =! todo.checked
        } 
        return todo
      });
      this.setState({
        todos: finalTodos,
      });
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
            todos={this.state.todos}
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

export default ToDoListMain;