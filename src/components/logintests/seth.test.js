let SHOULD_LOAD = 'SHOULD_LOAD';
let UPDATE_USER = 'UPDATE_USER';


function shouldLoad() {
    return {
        type: SHOULD_LOAD,
        payload: false
    }
}

function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user,
    }
}

let searchArray = [1, 2, 3, 4]

function arraySearches (x, y) {
    let newArray = [...searchArray]
    if (x) {
        newArray.push(y)
    } else {
        newArray.splice(newArray.indexOf(y), 1)
    }
    return newArray
}

let testData = {name: 'Seth', id: 1}
let testResults = {}

describe('Seth TEST', () => {
    test('Should return object of type: UPDATE_USER', () => {
        testResults = updateUser(testData)
        expect(testResults.type).toEqual("UPDATE_USER")
    });
    test('Should return object of payload with user object.name Seth', () => {
        testResults = updateUser(testData)
        expect(testResults.payload.name).toEqual("Seth")
    });
    test('Should return object of payload with user object.id 1', () => {
        testResults = updateUser(testData)
        expect(testResults.payload.id).toEqual(1)
    });
    test('Should return false regardless of input', () => {
        testResults = shouldLoad(testData)
        expect(testResults.payload).toEqual(false)
    });
    test('Should return added second parameter', () => {
        let test = arraySearches(true, 10)
        expect(test[4]).toEqual(10)
    });
    test('Should remove second value from array', () => {
        let test = arraySearches(false, 1)
        expect(test[0]).toEqual(2)
    });

})