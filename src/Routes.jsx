import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Index'
import Anuncio from './pages/Anuncio/Index'

const Routes = () => (
    <Switch>
        <Route path ="/" exact component = { Home } />
        <Route path ="/anuncio/:id" component = { Anuncio } />
    </Switch>
);

export default Routes;