import axios from 'axios';
import _ from 'lodash';

let initialState = {
    user: {},
    favorites: [],
    recipes: [],
    byCatagory: [],
    shopping: [],
};

const UPDATE_USER = 'UPDATE_USER';
const GET_RECIPES = 'GET_RECIPES'
const FULFILLED = '_FULFILLED';
const PENDING = '_PENDING';

export default function reducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case UPDATE_USER:
            return Object.assign({}, state, { user: payload });
        case GET_RECIPES + FULFILLED:
            return Object.assign({}, state, { recipes: payload });
        default:
            return state;
    }
}
export function updateUser(user) {
    console.log(user)
    return {
        type: UPDATE_USER,
        payload: user,
    }
}
export function getRecipes(recipes) {
    let allRecipes = axios.get('/api/recipes').then(res => res.data)
    return {
        type: GET_RECIPES,
        payload: allRecipes
    }
}