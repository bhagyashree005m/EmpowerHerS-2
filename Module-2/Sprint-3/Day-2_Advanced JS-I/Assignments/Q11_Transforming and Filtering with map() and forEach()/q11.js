//Q.11: Transforming and filtering with map() and forEach().

function processProducts(products) {
  // Step 1: Use map() to create a new array of product names
  const productNames = products.map(product => product.name);

  console.log("Product Names Array:", productNames);

  // Step 2: Use forEach() to log messages based on price
  products.forEach(product => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });
}

// Example usage:
const items = [
  { name: "Laptop", price: 1000 },
];

processProducts(items);
