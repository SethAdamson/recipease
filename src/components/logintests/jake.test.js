const fns = require('./jake-function');

describe('Login Properties:', () => {
    test('expect logged in to be an empty string', () => {
        let result = fns.loggedIn
        expect(result).toEqual("");
        expect(result.length).toEqual(0);
    })
    test('userID to be 0', () => {
        let result = fns.userID
        expect(result).toEqual(0)
    })
    test('expect error to be an empty string', () => {
        let result = fns.error
        expect(result).toEqual('')
    })
})

describe('Login Methods:', () => {
    afterEach(() => {
        fns.userID = 0;
        fns.loggedIn = '';
    })

    test('Login should return the message: You logged in successfully!', () => {
        fns.login('joe', 'schmoe');

        expect(fns.loggedIn).toEqual('You logged in successfully!')
    })

    test('Register should return the message: You are now registered and have logged in successfully!', () => {
        fns.register('im', 'hungry')

        expect(fns.loggedIn).toEqual('You are now registered and have logged in successfully!')
    })
})

   