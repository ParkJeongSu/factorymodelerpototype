import { combineReducers } from 'redux';
import logInOut from './logInOut';
import TodoList from './TodoList';
import Sidebar from './Sidebar';
import Content from './Content';
export default combineReducers({
    logInOut,
    TodoList,
    Sidebar,
    Content,
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
});