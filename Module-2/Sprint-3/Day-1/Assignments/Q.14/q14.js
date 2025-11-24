//Q.14: Merging and Updating Nested Objects with Spread Operator

const profile = {
  name: "Charlie",
  age: 29,
  address: {
    city: "San Francisco",
    zipcode: "94101"
  }
};

const updates = {
  age: 30,
  address: {
    zipcode: "94109",
    country: "USA"
  }
};

// Merge using spread operator
const mergedProfile = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address
  }
};

console.log(mergedProfile);

module.exports = mergedProfile;

//``test Given``
const mergedProfile = require('./q14');
test('merges and updates nested objects correctly', () => {
    expect(mergedProfile).toEqual({
        name: "Charlie",
        age: 30,
        address: {  
            city: "San Francisco",
            zipcode: "94109",
            country: "USA"
        }
    });
});//``test End`` Use the spread operator to merge and update nested objects.       
