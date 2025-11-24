//Q.17: Spread & Rest Operators (Focus: arrays, rest args, object destructuring).

// a) Spread Operator - merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];
console.log("Merged Array:", merged); // [1, 2, 3, 4, 5]

// b) Rest Operator - sum function
const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum(1, 2, 3, 4)); // 10
console.log("Sum:", sum(5, 10));      // 15

// c) Multi-level Object Destructuring
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const { name, address: { city, pin } } = user;
console.log("Name:", name); // Alice
console.log("City:", city); // Bangalore
console.log("Pin:", pin);   // 560001

module.exports = { merged, sum, name, city, pin };
//``test Given``
const { merged, sum, name, city, pin } = require('./q17');
test('merges two arrays correctly', () => {
    expect(merged).toEqual([1, 2, 3, 4, 5]);
});         
test('sums variable number of arguments correctly', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
    expect(sum(5, 10)).toBe(15);
});
test('destructures user object correctly', () => {
    expect(name).toBe("Alice");
    expect(city).toBe("Bangalore");
    expect(pin).toBe(560001);
});
//``test End``  
