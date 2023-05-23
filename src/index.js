import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {Provider} from "react-redux";
import {applyMiddleware, createStore, combineReducers} from "redux";
import {searchRobots, requestRobots} from "./Reducers";
import {createLogger} from "redux-logger/src";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({searchRobots, requestRobots})
const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware (thunkMiddleware, logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App/>
        </Provider>
    </React.StrictMode>
);
reportWebVitals();
