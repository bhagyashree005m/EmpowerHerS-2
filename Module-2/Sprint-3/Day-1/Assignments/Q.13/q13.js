//Q.13: Multi-Level Array and Object Destructuring. 

const people = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: { name: "Broadway", number: 123 }
    }
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 }
    }
  }
];

const result = people.map(({ name, address: { city, street: { name: streetName } } }) =>
  `${name} lives in ${city} on ${streetName}`
);

console.log(result);
// Output: ["Alice lives in New York on Broadway", "Bob lives in Los Angeles on Sunset Boulevard"]

module.exports = result;

//``test Given``
const result = require('./q13');
test('formats people address strings correctly', () => {
    expect(result).toEqual([
        "Alice lives in New York on Broadway",
        "Bob lives in Los Angeles on Sunset Boulevard"
    ]);
}
);//``test End`` Use destructuring in the parameter list of an arrow function to extract nested properties from objects within an array.