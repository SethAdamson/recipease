const Login = require('../Login');

test('State should update to You logged in successfuly', () => {
    Login.login('no', 'no');
    expect(Login.state.loggedIn).toEqual('You logged in successfully!')
})
test('Should update state to You are now registered and have logged in succesfully', () => {
    Login.register('yes', 'no');
    expect(Login.state.loggedIn).toEqual('You are now registered and have logged in successfully!')
})