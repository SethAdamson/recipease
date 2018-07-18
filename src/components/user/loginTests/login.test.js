const Login = require('../Login');

test('Login should set loggedin in state to You logged in successfully!', () => {
    Login.login('no', 'no');
    expect(Login.state.loggedIn).toEqual('You logged in successfully!')
})
test('Register should set loggedin in state to You are now registered and have logged in successfully!', () => {
    Login.register('yes', 'no');
    expect(Login.state.loggedIn).toEqual('You are now registered and have logged in successfully!')
})
