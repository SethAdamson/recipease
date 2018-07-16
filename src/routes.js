import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default (
    <Switch>
        <Route component={Home} path='/' exact />
        <Route component={RecipeList} path='/recipes' />
        <Route component={Recipe} path='/recipes/:id' />
        <Route component={Profile} path='/profile/:id' />
        <Route component={Favorites} path='/profile/:id/favorites' />
        <Route component={RecipeCUD} path='/profile/:id/myrecipe' />
    </Switch>
)