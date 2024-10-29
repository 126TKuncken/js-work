// Create new Date object
const d = new Date();
// Store the value of getHours in variable
let hour = d.getHours();

console.log(hour);

if (hour < 12) {
// Morning
document.GetElementById("greeting").innerText = "good morning"
document.GetElementById("image").src = img/Gh.jpg
// Afternoon
document.GetElementById("greeting").innerText = "good afternoon"
document.GetElementById("image").src = img/Gh.jpg
}

else {
// Night
document.GetElementById("greeting").innerText = "good night"
document.GetElementById("image").src = img/Gh.jpg
}






  





// let greetingElement = document.getElementById(greeting);
// console.log(greetingElement)
