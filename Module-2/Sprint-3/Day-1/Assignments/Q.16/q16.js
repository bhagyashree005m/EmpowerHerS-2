//Q.16: Arrow Functions & Ternary Operator.
//(Focus: arrow functions, simple conditional logic)
//a) Write an arrow function isEven(n) that returns true if even, else false.

// a) Arrow Function isEven
const isEven = (n) => n % 2 === 0;

console.log(isEven(4)); // true
console.log(isEven(7)); // false

// b) Ternary Operator for Pass/Fail
//b) Rewrite the following using a ternary operator:

//if (marks >= 35) {
  //result = "Pass";
//} else {
  //result = "Fail";
//}
const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result); // Pass

// c) Arrow Function greet with ternary operator
//c) Write an arrow function greet(name) that prints: "Hello, " If no name is passed, print "Guest" using the ternary operator.
const greet = (name) => `Hello, ${name ? name : "Guest"}`;

console.log(greet("Alice")); // Hello, Alice
console.log(greet());        // Hello, Guest

module.exports = { isEven, result, greet };

//``test Given``    
const { isEven, result, greet } = require('./q16');
test('checks if a number is even', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(7)).toBe(false);
});
test('determines pass or fail based on marks', () => {
    expect(result).toBe("Pass");
}

);
test('greets with name or Guest', () => {
    expect(greet("Alice")).toBe("Hello, Alice");
    expect(greet()).toBe("Hello, Guest");
}                               
);
//``test End``





