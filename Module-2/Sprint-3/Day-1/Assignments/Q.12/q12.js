// arrow function that takes a number as input and returns both its square and cube in an object, using implicit return.

const powerFunctions = (num) => ({
    square: num ** 2,
    cube: num ** 3
});
module.exports = powerFunctions;

//``test Given``
const powerFunctions = require('./q12');
test('calculates square and cube of a number', () => {
    expect(powerFunctions(2)).toEqual({ square: 4, cube: 8 });
    expect(powerFunctions(3)).toEqual({ square: 9, cube: 27 });
    expect(powerFunctions(-1)).toEqual({ square: 1, cube: -1 });
}
);
//``test End``

