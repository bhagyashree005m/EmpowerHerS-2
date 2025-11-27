// Start the loading simulation
let loading = setInterval(() => {
  console.log("Loading...");
}, 1000);

// Stop after 5 seconds
setTimeout(() => {
  clearInterval(loading);
  console.log("Loaded successfully!");
}, 5000);
