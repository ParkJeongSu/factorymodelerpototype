// 액션 타입 정의

const READ = 'TodoList/READ';
const CREATE = 'TodoList/CREATE';
const DELETE = 'TodoList/DELETE';
const CHECKED = 'TodoList/CHECKED';

// **** 액션 생섬함수 정의
export const readTodoList = () => ({ type: READ });
export const createTodoList = (todo) => ({ type: CREATE, todo:todo });
export const deleteTodoList = (id) => ({ type: DELETE , id});
export const checkedTodoList = (id) =>({type:CHECKED , id:id});


// **** 초기상태 정의
const initialState = {
    // todoList : [],
    // only electron
    todoList : window.getTodoList(),
  };

// **** 리듀서 작성
export default function logInOut(state = initialState, action) {
  let todoList;
  switch (action.type) {
    case READ:
      return state.todoList;
    case CREATE:
      todoList = window.createTodoList(action);
      return {
        ...state,
        todoList : todoList
      };
    case DELETE:
      console.log(action.id);
      todoList = window.deleteTodoList(action);
      console.log(todoList);
      return {
        ...state,
        todoList : todoList
      };
    case CHECKED:
      todoList = window.checkedTodoList(action);
      return {
        ...state,
        todoList : todoList
      };
    default:
      return state;
  }
}

