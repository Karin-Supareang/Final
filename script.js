// Paragraphs to display
const paragraphs = [
    "This is the first paragraph. It gives an overview of the topic.",
    "Here is the second paragraph, providing more details and examples.",
    "The third paragraph includes further elaboration and analysis.",
    "Finally, the fourth paragraph concludes the discussion."
];

let currentIndex = 0; // Tracks the current step

// Selectors for components
const paragraphElement = document.getElementById('paragraph'); // Displays the current paragraph
const prevBtn = document.getElementById('prevBtn'); // "Previous" button
const nextBtn = document.getElementById('nextBtn'); // "Next" button
const circles = document.querySelectorAll('.circle'); // Step circles
const indicator = document.querySelector('.indicator'); // Progress bar indicator

// Updates the paragraph and buttons based on the current step
function updateParagraph() {
    paragraphElement.textContent = paragraphs[currentIndex];
    prevBtn.disabled = currentIndex === 0; // Disable "Previous" button at first step
    nextBtn.disabled = currentIndex === paragraphs.length - 1; // Disable "Next" button at last step
    updateProgressBar(); // Update the progress bar and circles
}

// Updates the progress bar and step circles
function updateProgressBar() {
    circles.forEach((circle, index) => {
        if (index <= currentIndex) {
            circle.classList.add('completed'); // Mark completed steps
        } else {
            circle.classList.remove('completed'); // Reset incomplete steps
        }
    });

    // Adjust the progress bar indicator's width
    const progressPercentage = (currentIndex / (paragraphs.length - 1)) * 100;
    indicator.style.width = `${progressPercentage}%`;
}

// Event listener for "Previous" button
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateParagraph();
    }
});

// Event listener for "Next" button
nextBtn.addEventListener('click', () => {
    if (currentIndex < paragraphs.length - 1) {
        currentIndex++;
        updateParagraph();
    }
});

// Initialize the component
updateParagraph();
