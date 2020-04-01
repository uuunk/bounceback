import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tailwindcss/dist/base.css';
import 'tailwindcss/dist/components.css';
import 'tailwindcss/dist/utilities.css';
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Relief from "./Relief";
import Home from "./Home";

const AppRouter = () => (
    <Router>
        <div>
            <Route path='/' exact component={Home}/>
            <Route path='/relief/:slug' component={Relief}/>
        </div>
    </Router>
);

ReactDOM.render(
    <React.StrictMode>
        <AppRouter/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
