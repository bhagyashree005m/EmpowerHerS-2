// Step 1: Declare a global variable
let age = 25;  // Global variable

// Step 2: Create a function to display the global variable
function displayAge() {
    console.log("Current age is:", age);
}

// Step 3: Create another function to change the global variable
function changeAge(newAge) {
    age = newAge;  // Updating the global variable
    console.log("Age updated to:", age);
}

// Step 4: Call the functions
displayAge();     // Output: Current age is: 25
changeAge(30);    // Output: Age updated to: 30
displayAge();     // Output: Current age is: 30
