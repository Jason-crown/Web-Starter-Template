// =========================
// 1. COUNTER
// =========================

let count = 0;

// Select HTML elements
const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

// Update the counter display
function updateCounter() {
    countDisplay.textContent = count;
}

// Increment counter
incrementButton.addEventListener("click", () => {
    count++;
    updateCounter();
});

// Decrement counter
decrementButton.addEventListener("click", () => {
    count--;
    updateCounter();
});

// Reset counter
resetButton.addEventListener("click", () => {
    count = 0;
    updateCounter();
});


// =========================
// 2. THEME TOGGLE
// =========================

const themeButton = document.getElementById("theme-toggle");

// Toggle between light and dark themes
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight =
        document.body.classList.contains("light-theme");

    // Update button text and accessibility label
    themeButton.textContent = isLight
        ? "Dark Mode"
        : "Light Mode";

    themeButton.setAttribute(
        "aria-label",
        isLight ? "Switch to dark mode" : "Switch to light mode"
    );
});