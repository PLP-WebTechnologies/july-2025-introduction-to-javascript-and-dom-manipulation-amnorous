// 🧠 Part 1: JavaScript Basics
// ----------------------------------

// Variable declarations
let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");
userAge = Number(userAge);

// Conditionals
if (userAge >= 18) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

// Output greeting in DOM
document.getElementById("greeting").textContent = `Hello, ${userName}! You are ${userAge} years old.`;

// ❤️ Part 2: JavaScript Functions
// ----------------------------------

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to format a greeting
function formatGreeting(name) {
  return `Welcome, ${name}!`;
}

console.log(calculateTotal(9.99, 3)); // Output: 29.97
console.log(formatGreeting(userName)); // Output: Welcome, [name]!

// 🔁 Part 3: JavaScript Loops
// ----------------------------------

// For loop: Add numbers 1 to 5 to a list
const numberList = document.getElementById("numberList");

for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Number: ${i}`;
  numberList.appendChild(li);
}

// While loop: Countdown from 5
let count = 5;
let countdownText = "";

while (count >= 0) {
  countdownText += count + " ";
  count--;
}

document.getElementById("countdown").textContent = countdownText;

// 🌐 Part 4: DOM Manipulation
// ----------------------------------

// DOM interaction 1: Toggle text visibility on button click
const toggleBtn = document.getElementById("toggleBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  message.classList.toggle("hidden");
});

// DOM interaction 2: Change text content
message.textContent = "You clicked the button!";

// DOM interaction 3: Dynamically update styles
toggleBtn.addEventListener("mouseover", () => {
  toggleBtn.style.backgroundColor = "#4CAF50";
});
toggleBtn.addEventListener("mouseout", () => {
  toggleBtn.style.backgroundColor = "";
});
