import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import RecipeList from './components/recipes/RecipeList'
import RecipeDetail from './components/recipes/Recipe'
import Profile from './components/user/Profile'
import Favorites from './components/user/Favorites'
import RecipeCUD from './components/user/RecipeCUD'
import Login from './components/user/Login'
import Section from './components/section/Section'
import Classics from './components/section/Classics'
import Healthy from './components/section/Healthy'
import Seasonal from './components/section/Seasonal'

export default (
    <Switch>
        <Route component={Home} path='/' key={Math.random()} exact />
        <Route component={RecipeList} path='/recipes' />
        <Route component={RecipeDetail} path='/recipes/:id' />
        <Route component={Profile} path='/profile/:id' />
        <Route component={Favorites} path='/profile/:id/favorites' />
        <Route component={RecipeCUD} path='/profile/:id/myrecipe' />
        <Route component={Section} path='/section' />
        <Route component={Classics} path='/classics' />
        <Route component={Healthy} path='/healthy' />
        <Route component={Seasonal} path='/Seasonal' />
        <Route component={Login} path='/login' />
    </Switch>
)