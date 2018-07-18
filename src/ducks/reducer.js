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
const FULFILLED = '_FULFILLED';
const PENDING = '_PENDING';

export default function reducer(state = initialState, action) {
    let {type, payload} = action;
    switch (type) {
        case UPDATE_USER:
            return Object.assign({}, state, {user: payload});
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