import axios from 'axios';
import _ from 'lodash';

let initialState = {
    userID: 0,
    email: '',
    password: '',
    favorites: [],
    recipes: [],
    byCatagory: [],
    shopping: [],
};

const UPDATE_USER = 'UPDATE_USER';
const FULFILLED = '_FULFILLED';
const PENDING = '_PENDING';

export default function reducer(state = initialState, action) {
    let { type, payload } = action;

    switch (type) {
        case UPDATE_USER:
            return Object.assign({}, state, {
                userID: payload.userID,
                email: payload.email
            })
    }
}
export function updateUser(userID) {
    console.log(userID)
    return {
        type: UPDATE_USER,
        payload:
            userID[0],
        // email
    }
}