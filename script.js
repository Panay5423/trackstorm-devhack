// Typing Effect
const tagline = "Take a Deep Breath & Relax";
const speed = 50;
const eraseSpeed = 70;
const delayBetween = 1500;

let i = 0;
let isDeleting = false;
const taglineElement = document.getElementById("tagline");

function typeEffect() {
    if (!taglineElement) return; // Ensure element exists
    if (!isDeleting && i <= tagline.length) {
        taglineElement.textContent = tagline.substring(0, i);
        i++;
        setTimeout(typeEffect, speed);
    } else if (isDeleting && i >= 0) {
        taglineElement.textContent = tagline.substring(0, i);
        i--;
        setTimeout(typeEffect, eraseSpeed);
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeEffect, delayBetween);
    }
}

typeEffect();

// Modal Functionality
const modal = document.getElementById("registerModal");
const openModalBtn = document.getElementById("exploreMoreBtn");
const closeModalBtn = document.querySelector(".close");

document.getElementById("moodTrackerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const mood = document.getElementById("mood").value;
    const activity = document.getElementById("activity").value;

    if (!date || !mood || !activity) {
        alert("❌ Please fill out all fields!");
        return;
    }

    let moodEntries = JSON.parse(localStorage.getItem("moodEntries")) || [];
    moodEntries.push({ date, mood, activity });

    localStorage.setItem("moodEntries", JSON.stringify(moodEntries));
    alert("✅ Entry Saved!");

    displayEntries();
});

function displayEntries() {
    let moodEntries = JSON.parse(localStorage.getItem("moodEntries")) || [];
    let savedEntriesList = document.getElementById("savedEntries");
    savedEntriesList.innerHTML = "";

    moodEntries.forEach(entry => {
        let listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `📅 ${entry.date} | 😃 ${entry.mood} | 🎯 ${entry.activity}`;
        savedEntriesList.appendChild(listItem);
    });
}

// Load existing entries on page load
displayEntries();

