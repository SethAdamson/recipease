import React from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { Switch, Route } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom';

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