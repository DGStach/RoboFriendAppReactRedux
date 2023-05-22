import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {searchRobots} from "./Reducers";


const store = createStore(searchRobots)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App/>
        </Provider>
    </React.StrictMode>
);
reportWebVitals();
