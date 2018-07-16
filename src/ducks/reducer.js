import axios from 'axios';
import _ from lodash;

let initialState = {
    user = {},
    favorites = [],
    recipes = [],
    byCatagory = [],
    shopping = [],
};


const FULFILLED = '_FULFILLED';
const PENDING = '_PENDING';

export default function reducer(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}