const initialState = {
    userID: 0,
    // username: '',
    email: '',
    password: '',
}

const UPDATE_USER = 'UPDATE_USER';

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
export function updateUser(userID, email) {
    console.log(userID[0].email)
    return {
        type: UPDATE_USER,
        payload:
            userID[0],
        email
    }
}