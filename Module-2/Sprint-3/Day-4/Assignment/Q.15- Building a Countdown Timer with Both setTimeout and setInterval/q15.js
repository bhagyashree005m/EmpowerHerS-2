// Ask user for countdown time
let seconds = parseInt(prompt("Enter countdown time in seconds:"), 10);

// Start countdown using setInterval
let timer = setInterval(() => {
  console.log(`Remaining time: ${seconds} seconds`);
  seconds--;

  if (seconds < 0) {
    clearInterval(timer);
    console.log("Countdown Complete!");
  }
}, 1000);

// Delay key detection using setTimeout
setTimeout(() => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "s") {
      clearInterval(timer);
      console.log("Countdown stopped by user!");
    }
  });
}, 2000); // start listening after 2 seconds
