import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Controls from './components/Controls';
import Lost from './components/Lost';
import * as serviceWorker from './serviceWorker';

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

ReactDOM.render((
    <Router basename={"/"}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/controls" component={Controls} />
            <Route component={Lost} />
        </Switch>
       
    </Router>
    ), document.getElementById('root'));
    
/*
ReactDOM.render(<BrowserRouter basename={"/"}>
    <App />
  </BrowserRouter>, document.getElementById('root'));
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
