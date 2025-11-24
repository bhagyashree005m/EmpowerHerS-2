//Q.15: Template Literals & Shorthands.
//(Focus: template strings, object shorthand, methods)
//a) Create a variable username and course and print: "Hello , welcome to the course!" using template literals.
// a) Template Literals
const username = "sam";
const course = "Web Development";
console.log(`Hello ${username}, welcome to the ${course} course!`);

// b) Object Shorthand
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};
student.greet();

// c) Arrow Function Shorthand
const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Sam", "Smith"));
