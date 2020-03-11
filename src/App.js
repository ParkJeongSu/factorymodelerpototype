import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Main from './page/Main';
import Login from './page/Login';
import { connect } from 'react-redux';

const App = (props) => {
  const isLogin = props.isLogin;
  return (
    isLogin===true ? <Main></Main> : <Login/>
  );
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  isLogin: state.logInOut.isLogin,
});

export default connect(mapStateToProps)(App);

