var state = {
    userID: 0,
    email: '',
    password: '',
    error: '',
    loggedIn: ''
}
var count = 1;

function login(email, password) {
    state = { email: email, password: password }
}
function logout() {
    state = {
        userID: 0,
        email: '',
        password: '',
        error: '',
        loggedIn: '',
        users: []
    }
}
function register() {
    state.users.push(count)
    count++
}
function clearUsers() {
    state.users = []
}

test('userID should be 0', () => {
    expect(state.userID).toEqual(0);
})
test('Login should set email and password in state', () => {
    login('no', 'no')
    expect(state.email).toEqual('no')
    expect(state.password).toEqual('no')
})
test('Logout should clear the state object', () => {
    logout()
    expect(state.userID).toEqual(0)
    expect(state.email).toEqual('')
    expect(state.password).toEqual('')
    expect(state.error).toEqual('')
    expect(state.loggedIn).toEqual('')
})
test('register should increment userID and push it to users', () => {
    register()
    register()
    register()
    register()
    expect(state.users.length).toEqual(4)
    expect(count).toEqual(5)
})
test('clearusers should set users to 0', () => {
    clearUsers()
    expect(state.users.length).toEqual(0)
})