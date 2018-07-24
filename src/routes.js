import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeList from './components/recipes/RecipeList';
import RecipeDetail from './components/recipes/RecipeDetail';
import Profile from './components/user/Profile';
import Favorites from './components/user/Favorites';
import RecipeCUD from './components/user/RecipeCUD';
import Classics from './components/subsections/Classics';
import Healthy from './components/subsections/Healthy';
import Seasonal from './components/subsections/Seasonal';
import Shopping from './components/user/Shopping';

export default (
    <Switch>
        <Route component={Home} path='/' key={Math.random()} exact />
        <Route component={RecipeList} path='/recipes' exact/>
        <Route component={RecipeDetail} path='/recipes/:id' />
        <Route component={Profile} path='/profile/:id' exact/>
        <Route component={Favorites} path='/profile/:id/favorites' />
        <Route component={RecipeCUD} path='/profile/:id/myrecipes' />
        <Route component={Shopping} path='/profile/:id/shopping' />
        <Route component={Classics} path='/classics' />
        <Route component={Healthy} path='/healthy' />
        <Route component={Seasonal} path='/Seasonal' />
    </Switch>
)