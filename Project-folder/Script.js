/* =========================================
   Animate Sections on Load
========================================= */
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((sec, index) => {
        setTimeout(() => {
            sec.classList.add('visible');
        }, index * 300); // staggered animation
    });
});

/* =========================================
   Part 1: Variables and Conditionals
========================================= */
let defaultUser = "Guest";
let hour = new Date().getHours();
let greetingMessage;

if (hour < 12) greetingMessage = `Good morning, ${defaultUser}!`;
else if (hour < 18) greetingMessage = `Good afternoon, ${defaultUser}!`;
else greetingMessage = `Good evening, ${defaultUser}!`;

document.getElementById("greeting").textContent = greetingMessage;

/* =========================================
   Part 2: Functions
========================================= */
function sum(a, b) { return a + b; }
document.getElementById("sumResult").textContent = sum(5, 10);

function toUpperCase(str) { return str.toUpperCase(); }
document.getElementById("upperResult").textContent = toUpperCase("hello world");

/* =========================================
   Part 3: Loops
========================================= */
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    li.style.opacity = 0;
    document.getElementById("numberList").appendChild(li);
    setTimeout(() => li.style.opacity = 1, i * 200); // fade in
}

let numbers = [1, 2, 3, 4, 5, 6];
let evens = [];
numbers.forEach(num => { if (num % 2 === 0) evens.push(num); });
document.getElementById("evenNumbers").textContent = evens.join(", ");

/* =========================================
   Part 4: DOM Interaction
========================================= */
document.getElementById("colorBtn").addEventListener("click", function() {
    const color = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = color;
});

let itemCount = 1;
document.getElementById("addItemBtn").addEventListener("click", function() {
    itemCount++;
    let li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    li.style.opacity = 0;
    li.style.transform = "translateX(-20px)";
    document.getElementById("dynamicList").appendChild(li);
    setTimeout(() => {
        li.style.opacity = 1;
        li.style.transform = "translateX(0)";
    }, 100);
});

/* =========================================
   Part 5: Interactive Form & Validation
========================================= */
document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("userName").value.trim();
    const age = parseInt(document.getElementById("userAge").value);
    const msgEl = document.getElementById("formMessage");

    if (!name || isNaN(age) || age <= 0) {
        msgEl.textContent = "Please enter a valid name and age.";
        msgEl.style.color = "red";
    } else {
        msgEl.textContent = `Hello ${name}, you are ${age} years old!`;
        msgEl.style.color = "green";
        let newHour = new Date().getHours();
        let greet;
        if (newHour < 12) greet = `Good morning, ${name}!`;
        else if (newHour < 18) greet = `Good afternoon, ${name}!`;
        else greet = `Good evening, ${name}!`;
        document.getElementById("greeting").textContent = greet;
    }
});

/* =========================================
   Part 6: Countdown Timer with Animation
========================================= */
function countdownTimer() {
    const countdownEl = document.getElementById("countdown");
    const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownEl.textContent = "Happy New Year!";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    countdownEl.style.color = `hsl(${seconds*6}, 70%, 50%)`; // color pulse
}

let timer = setInterval(countdownTimer, 1000);
countdownTimer();
