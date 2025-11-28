//Q.12: Asynchronous Timer with Callback.

// Function to simulate a timer with a callback
function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}

// Example usage
timer(2000, (message) => {
  console.log(message);
});

