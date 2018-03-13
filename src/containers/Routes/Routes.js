import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Services from '../Services/Services';

export default class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component = { Home }/>
                <Route  path="/service" component = { Services }/>
            </Switch>
        )
    }
}