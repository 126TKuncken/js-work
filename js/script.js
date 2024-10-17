const d = new Date();
let hour = d.getHours();


console.log
if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 17) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good night";
  }