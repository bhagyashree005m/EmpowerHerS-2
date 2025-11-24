// 1. Template Literals + Expressions
console.log(`5 + 7 = ${5 + 7}`);

const multiLine = `This is line one
This is line two
This is line three`;
console.log(multiLine);

const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);


// 2. Arrow Functions & this
const square = (n) => n * n;
console.log("Square:", square(5));

// b) Explanation: Arrow functions don’t bind their own `this`. So `this.value` is undefined.
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); // undefined

// c) Normal function so printing works
const obj2 = {
  value: 50,
  test: function () {
    console.log(this.value);
  }
};
obj2.test(); // 50


// 3. Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log("Copy:", copyProduct);

const a = { x: 1 };
const b = { y: 2 };
const mergedObj = { ...a, ...b };
console.log("Merged:", mergedObj);

const maxValue = (...nums) => Math.max(...nums);
console.log("Max:", maxValue(1, 5, 3, 9));


// 4. Destructuring & Optional Chaining
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log("a:", a1, "b:", b1);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log("Brand:", brand);

const info = {};
console.log("Safe Access:", info.user?.details?.email); // undefined


// 5. Scoping (let/var/const)
for (var i = 0; i < 3; i++) {}
console.log("var i:", i); // 3

for (let j = 0; j < 3; j++) {}
// console.log("let j:", j); // ReferenceError

// c) const is used for values that should not be reassigned, ensuring immutability.


// 6. Ternary Operator – Practice
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log("Speed:", speed);

let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

let num = -5;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");


// 7. Spread, Rest & Arrays
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log("New Array:", newNums);

const arrA = ["x", "y"];
const arrB = ["z"];
const combined = [...arrA, ...arrB];
console.log("Combined:", combined);

const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));


// 8. Object Destructuring & Shorthand
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log("User:", id, status);

const role = "admin";
const user2 = { id, role };
console.log("Shorthand User:", user2);

const name = "Sam";
const person = {
  name,
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
person.greet();


// 9. Template Literals (More Practice)
console.log(`Today's date is ${new Date().toDateString()}`);

const NAME = "Alice";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// 10. Arrow Function Shorthands
const add = (x, y) => x + y;
console.log("Add:", add(3, 4));

const isAdult = (age) => age >= 18;
console.log("isAdult:", isAdult(17));

const double = (n) => n * 2;
console.log("Double:", double(6));


// 11. Spread Operator (Arrays & Objects)
const arrClone = [...[1, 2, 3]];
console.log("Clone:", arrClone);

const arrWith100 = [100, ...[1, 2, 3]];
console.log("With 100:", arrWith100);

const objA = { x: 1, y: 2 };
const objB = { y: 99, z: 3 };
const mergedOverride = { ...objA, ...objB };
console.log("Merged Override:", mergedOverride);


// 12. Optional Chaining (More Practice)
const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log("City:", user3.address?.city);

console.log("Job Title:", user3.job?.title); // undefined

const company = { name: "TechCorp" };
console.log("Street:", company.location?.address?.street); // undefined, no error

