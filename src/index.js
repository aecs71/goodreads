import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
//import history from './history';

render(

    <Router >
        <App />
    </Router>
    , document.getElementById('app')
);
