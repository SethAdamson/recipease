var state = {
    id: undefined,
    username: undefined,
    email: undefined,
    newToggle: false,
    profileToggle: false,
    loginToggle: false,
    hamburgerToggle: false,
    menuToggle: false,
    search: ''
}


function newToggle() {
    state = { newToggle: true }
}

function profileToggle() {
    state = { profileToggle: true }
}

function loginToggleFn() {
    state = { loginToggle: true }
}

function hamburgerToggle() {
    state = { hamburgerToggle: true, menuToggle: true }
}

function logout() {
    state = {
        id: 0,
        username: '',
        email: ''
    }
}

describe('France TEST', () => {
    test('newToggle should return truthy', () => {
        newToggle();
        expect(state.newToggle).toBeTruthy()
    });
    test('profileToggle should return truthy', () => {
        profileToggle();
        expect(state.profileToggle).toBeTruthy()
    });
    test('Logout should clear the state object', () => {
        logout();
        expect(state.id).toEqual(0)
        expect(state.username).toEqual('')
        expect(state.email).toEqual('')
    });
    test('loginToggleFn should return truthy', () => {
        loginToggleFn();
        expect(state.loginToggle).toBeTruthy()
    });
    test('hamburgerToggle should return truthy', () => {
        hamburgerToggle();
        expect(state.hamburgerToggle).toBeTruthy()
        expect(state.menuToggle).toBeTruthy()
    });
})