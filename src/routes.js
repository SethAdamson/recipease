import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home'
import RecipeList from './Components/recipes/RecipeList'
import Recipe from './Components/recipes/Recipe'
import Profile from './Components/user/Profile'
import Favorites from './Components/user/Favorites'
import RecipeCUD from './Components/user/RecipeCUD'
import LogReg from './components/user/LogReg'

export default (
    <Switch>
        <Route component={Home} path='/' exact />
        <Route component={RecipeList} path='/recipes' />
        <Route component={Recipe} path='/recipes/:id' />
        <Route component={Profile} path='/profile/:id' />
        <Route component={Favorites} path='/profile/:id/favorites' />
        <Route component={RecipeCUD} path='/profile/:id/myrecipe' />
        <Route component={LogReg} path='/login' />
    </Switch>
)