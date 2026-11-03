
// Display a welcome message in the browser console
console.log("Welcome to Ruth Njoki's Portfolio!");

// Select all navigation links
const navigationLinks = document.querySelectorAll(".nav-links a");

// Highlight the active navigation link when clicked
navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        navigationLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// Check that the project cards exist
const projectCards = document.querySelectorAll(".project-card");

console.log("Projects found:", projectCards.length);
