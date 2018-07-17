import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import RecipeList from './components/recipes/RecipeList'
import Recipe from './components/recipes/Recipe'
import Profile from './components/user/Profile'
import Favorites from './components/user/Favorites'
import RecipeCUD from './components/user/RecipeCUD'

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