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

// Show modal when "Explore More" is clicked
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Hide modal when the close button is clicked
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal if the user clicks outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Form Submission (Fake Processing)
// document.getElementById("registrationForm").addEventListener("submit", (event) => {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const gender = document.querySelector('input[name="gender"]:checked').value;
//     const country = document.getElementById("country").value;

//     alert(`✅ Registration Successful!\n👤 Name: ${name}\n📧 Email: ${email}\n🚻 Gender: ${gender}\n🌍 Country: ${country}`);

//     modal.style.display = "none";
// });
// document.getElementById("exploreMoreBtn").addEventListener("click", function() {
//     window.location.href = "login.html"; // Redirect to Login Page
// });
function redirectToLogin() {
    window.location.href = "login.html"; // Redirect to login page
}
