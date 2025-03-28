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

// Toggle Extra Content
document.querySelectorAll(".info-box").forEach(box => {
    box.addEventListener("click", function () {
        const extraContent = this.querySelector(".extra-content");
        extraContent.style.display = extraContent.style.display === "block" ? "none" : "block";
    });
});
// need help 
document.addEventListener("DOMContentLoaded", function () {
    var myModal = new bootstrap.Modal(document.getElementById("helpModal"));

    document.getElementById("openModal").addEventListener("click", function () {
        myModal.show();
    });

    document.getElementById("closeModal").addEventListener("click", function () {
        myModal.hide();
    });

    document.getElementById("closeBtn").addEventListener("click", function () {
        myModal.hide();
    });
});
document.getElementById("moodTrackerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const problem = document.getElementById("problem").value;
    const mood = document.querySelector('input[name="mood"]:checked');

    if (!date || !mood || !problem) {
        alert("❌ Please fill out all fields!");
        return;
    }

    let moodEntries = JSON.parse(localStorage.getItem("moodEntries")) || [];
    moodEntries.push({ date, mood: mood.value, problem });

    localStorage.setItem("moodEntries", JSON.stringify(moodEntries));
    alert("✅ Entry Saved!");

    displayEntries();
});

function displayEntries() {
    let moodEntries = JSON.parse(localStorage.getItem("moodEntries")) || [];
    let savedEntriesList = document.getElementById("moodEntries");
    savedEntriesList.innerHTML = "";

    moodEntries.forEach(entry => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<span>${entry.mood}</span> 📅 ${entry.date} | 📝 ${entry.problem}`;
        savedEntriesList.appendChild(listItem);
    });
}

// Load existing entries on page load
displayEntries();
