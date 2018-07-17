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
    let { type, payload } = action;

    switch (type) {
        case UPDATE_USER:
            return Object.assign({}, state, {
                userID: payload.userID,
                email: payload.email
            })
    }
}
export function updateUser(val) {
    console.log(val)
    // return {
    //     type: UPDATE_USER,
    //     payload:
    //         userID[0],
    //     email
    // }
}