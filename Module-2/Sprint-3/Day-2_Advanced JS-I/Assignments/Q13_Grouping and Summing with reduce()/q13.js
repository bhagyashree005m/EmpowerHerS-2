//Q.13: Grouping and Summing with reduce()
function processCategories(categories) {
  // Step 1: Use reduce() to count how many times each category appears
  const counts = categories.reduce(function(acc, category) {
    // If category already exists in acc, add +1
    // Otherwise, start with 1
    if (acc[category]) {
      acc[category] += 1;
    } else {
      acc[category] = 1;
    }
    return acc;
  }, {}); // {} is the starting empty object

  console.log("Counts:", counts);

  // Step 2 (Extra Challenge): Sort categories by count in descending order
  const sortedCategories = Object.entries(counts) // turns object into [key, value] pairs
    .sort(function(a, b) {
      return b[1] - a[1]; // compare counts (values)
    })
    .map(function(entry) {
      return entry[0]; // take only the category name
    });

  console.log("Sorted Categories:", sortedCategories);

  // Return both results
  return { counts, sortedCategories };
}

// Example usage:
const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
const result = processCategories(input);

console.log(result);
