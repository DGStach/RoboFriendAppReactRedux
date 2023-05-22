import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {searchRobots} from "./Reducers";
import {createLogger} from "redux-logger/src";

const logger = createLogger()
const store = createStore(searchRobots, applyMiddleware (logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App/>
        </Provider>
    </React.StrictMode>
);
reportWebVitals();
