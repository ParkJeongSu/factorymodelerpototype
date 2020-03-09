import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Main from './component/Main';
import Login from './component/Login';
import { connect } from 'react-redux';


const App = (props) => {
  const isLogin = props.isLogin;
  //const isLogin = false;
  return (
    isLogin===true ? <Main></Main> : <Login/>
  );
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  isLogin: state.logInOut.isLogin,
});

export default connect(mapStateToProps)(App);

