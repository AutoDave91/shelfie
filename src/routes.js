import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

export default <Switch>
    <Route component={Dashboard} path='/' exact />
    <Route component={Form} path='/add' />
    <Route component={Form} path='/edit/:id' />
</Switch>