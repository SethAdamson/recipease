var state = {
    userID: 0,
    email: '',
    password: '',
    error: '',
    loggedIn: '',
    users: [{
        userID: 0,
        email: '',
        password: ''
    }],
    userIDList: []
}
var count = 1;

function login(email, password) {
    state = { email: email, password: password }
    for (let i = 0; i < this.state.users.length; i++) {
        if (email === users[i].email && password === users[i].password) {
            return 'logged in'
        } else {
            return 'incorrect credentials. try again.'
        }
    }
}
function logout() {
    state = {
        userID: 0,
        email: '',
        password: '',
        error: '',
        loggedIn: ''
    }
}
function register(email, password) {
    const { userID, users, userIDList } = state
    userID++;
    users.push(userID, email, password)
    userIDList.push(userID);
    // this.state.userCount++;
}
function clearUsers() {
    state.users = []
}
function checkUser(email, password) {

}
test('userID should be 0', () => {
    expect(state.userID).toEqual(0);
})
test('Login should set email and password in state to app. values', () => {
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
test('register should push a new user object to the users object in state', () => {
    register('avery', 'slight')
    expect(state.users[0].userID).toEqual(1)
    expect(state.users[0].email).toEqual('avery')
    expect(state.users[0].password).toEqual('slight')
})
test('register should increment userID and push it to users', () => {
    register()
    register()
    register()
    register()
    expect(state.userIDList.length).toEqual(3)
    expect(state.userID).toEqual(4)
})
test('clearusers should set users to 0', () => {
    clearUsers()
    expect(state.users.length).toEqual(0)
})
