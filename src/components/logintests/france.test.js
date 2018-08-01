const fns = require('./../recipes/Recipe');

test("The rating is changed to 1", () => {
    fns.changeRating(1)
    expect(fns.changeRating).toEqual(1)
});


