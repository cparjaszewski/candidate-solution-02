import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';
import Main from './components/main.jsx';
import Home from './components/home.jsx';
import Create from './components/create.jsx';
import Preview from './components/preview.jsx';
import Export from './components/export.jsx';


    
    class App extends Component{
        render(){
            return(
                <Router history={hashHistory}>
                    <Route path='/' component= {Main}>
                        <IndexRoute component={Home} />
                        <Route path='/create' component={Create} />
                        <Route path='/preview' component = {Preview} />
                        <Route path='/export' component = {Export} />
                    </Route>
                </Router>
            )
        }
    }


document.addEventListener("DOMContentLoaded",()=>{

    ReactDOM.render(
    <App />,
    document.querySelector('#app'));
})
