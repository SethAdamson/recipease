import axios from 'axios';
import _ from 'lodash';

let initialState = {
    user: undefined,
    favorites: [],
    myRecipes: [],
    // newRcipe: [],
    recipes: [],
    byCategory: [],
    shopping: [],
    searchArray: [],
    scrolling: false,
    profToggle: false,
    loading: true
};

const UPDATE_USER = 'UPDATE_USER';
const GET_RECIPES = 'GET_RECIPES';
const FULFILLED = '_FULFILLED';
const PENDING = '_PENDING';
const CAT_RECIPES = 'CAT_RECIPES';
const SEARCH_NUMS = 'SEARCH_NUMS';
const HAS_SCROLLED = 'HAS_SCROLLED'
const ADD_FAV = 'ADD_FAV';
const DELETE_FAV = 'DELETE_FAV';
const GET_FAVS = 'GET_FAVS';
const ADD_RECIPE = 'ADD_RECIPE';
const CREATE_RECIPE = 'CREATE_RECIPE';
const CHECK_USER = 'CHECK_USER';
const DESTROY_SESSION = 'DESTROY_SESSION';
const PROF_TOGGLE = 'PROF_TOGGLE';
const SHOULD_LOAD = 'SHOULD_LOAD';

export default function reducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case UPDATE_USER:
            return Object.assign({}, state, { user: payload });
        case GET_RECIPES + FULFILLED:
            return Object.assign({}, state, { recipes: payload });
        case CAT_RECIPES + FULFILLED:
            return Object.assign({}, state, { byCategory: payload });
        case SEARCH_NUMS:
            return Object.assign({}, state, { searchArray: payload })
        case ADD_FAV + FULFILLED:
            return Object.assign({}, state, { favorites: payload })
        case DELETE_FAV + FULFILLED:
            return Object.assign({}, state, { favorites: payload })
        case GET_FAVS + FULFILLED:
            return Object.assign({}, state, { favorites: payload })
        case HAS_SCROLLED:
            return Object.assign({}, state, { scrolling: payload });
        case PROF_TOGGLE:
            return Object.assign({}, state, { profToggle: payload});
        case SHOULD_LOAD:
            return Object.assign({}, state, { loading: payload});
        case ADD_RECIPE + FULFILLED:
            return Object.assign({}, state, { recipes: payload })
        case CREATE_RECIPE + FULFILLED:
            return Object.assign({}, state, { recipes: payload })
        case CHECK_USER + FULFILLED:
            return Object.assign({}, state, { user: payload })
        case DESTROY_SESSION + FULFILLED:
            return Object.assign({}, state, { user: payload })
        default:
            return state;
    }
}
export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user,
    }
}
export function getRecipes() {
    let allRecipes = axios.get('/api/recipes').then(res => res.data)
    return {
        type: GET_RECIPES,
        payload: allRecipes
    }
}
export function getCategory() {
    let catRecipes = axios.get('/api/recbycat').then(res => res.data)
    return {
        type: CAT_RECIPES,
        payload: catRecipes
    }
}
export function searchNums(num) {
    return {
        type: SEARCH_NUMS,
        payload: num
    }
}
export function addFav(userid, recipeid) {
    let favs = axios.post('/api/addfav', {userid, recipeid}).then(res => res.data)
    return {
        type: ADD_FAV,
        payload: favs
    }
}
export function getFavs(userid) {
    let allFavs = axios.get(`/api/favorites/${userid}`).then(res => res.data)
    return {
        type: GET_FAVS,
        payload: allFavs
    }
}
export function deleteFav(userid, recipeid) {
    let newFavs = axios.delete(`/api/delete/${userid}/${recipeid}`).then(res => res.data)
    return {
        type: DELETE_FAV,
        payload: newFavs
    }
}
export function hasScrolled(val) {
    return {
        type: HAS_SCROLLED,
        payload: val
    }
}
export function addRecipe(recipes) {
    let allRecipes = axios.post('/api/addrecipe').then(res => res.data)
    return {
        type: ADD_RECIPE,
        payload: allRecipes
    }
}
export function createRecipe(recipes) {
    let allRecipes = axios.post('/api/createrecipe', recipes).then(() => getRecipes())
    return {
        type: CREATE_RECIPE,
        payload: allRecipes
    }
}
export function checkUser() {
    let currUser = axios.get('/api/checkuser')
        .then(res => res.data)
    return {
        type: CHECK_USER,
        payload: currUser
    }
}
export function logOut() {
    let logout = axios.post('/api/logout').then(e => { })
    return {
        type: DESTROY_SESSION,
        payload: logout
    }
}
export function menuProfile(val) {
    return {
        type: PROF_TOGGLE,
        payload: val
    }
}
export function shouldLoad() {
    return {
        type: SHOULD_LOAD,
        payload: false
    }
}
export function unLoad() {
    return {
        type: SHOULD_LOAD,
        payload: true
    }
}