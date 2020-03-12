import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import rootReducer from './store/modules';
import { createStore } from 'redux';
// **** (2) 스토어를 만들고 현재 값 확인해보기

import { Provider } from 'react-redux';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer,devTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
        
, document.getElementById('root'));

