import { combineReducers } from 'redux';
import logInOut from './logInOut';
import DbConnect from './DbConnect';
export default combineReducers({
    logInOut,
    DbConnect,
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
});