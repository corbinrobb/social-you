import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers';
import "./index.css";


ReactDOM.render(<Provider store={createStore(reducer, applyMiddleware(thunk))}><App /></Provider>, document.querySelector('#root'));