//``function Given``
function multiply(a, b) {
    return a * b;
}

//arrow function
const multiply = (a, b) => a * b;

//function expression
const multiply = function(a, b) {
    return a * b;
};
//``function End``

module.exports = multiply;

//``test Given``
const multiply = require('./q11');
test('multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(0, 10)).toBe(0);
});
//``test End``


