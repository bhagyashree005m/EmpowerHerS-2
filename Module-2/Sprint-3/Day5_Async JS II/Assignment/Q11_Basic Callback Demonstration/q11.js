//Q.11:Basic Callback Demonstration.

// Function to display a greeting message
function displayMessage(name) {
  console.log("Hello, " + name + "!");
}

// Function to simulate user input with a callback
function getUserInput(callback) {
  setTimeout(() => {
    let username = "Alice"; // Simulated retrieved username
    callback(username);     // Call the callback with the username
  }, 1000);
}

// Call getUserInput with displayMessage as the callback
getUserInput(displayMessage);
