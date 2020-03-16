import { combineReducers } from 'redux';
import logInOut from './logInOut';
import TodoList from './TodoList';
import Sidebar from './Sidebar';
export default combineReducers({
    logInOut,
    TodoList,
    Sidebar,
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
});