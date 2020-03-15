import { combineReducers } from 'redux';
import logInOut from './logInOut';
import DbConnect from './DbConnect';
import TodoList from './TodoList';
export default combineReducers({
    logInOut,
    DbConnect,
    TodoList
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
});