const paragraphs = [
    "This is the first paragraph. It gives an overview of the topic.",
    "Here is the second paragraph, providing more details and examples.",
    "The third paragraph includes further elaboration and analysis.",
    "Finally, the fourth paragraph concludes the discussion."
];

let currentIndex = 0;

// Elements
const paragraphElement = document.getElementById('paragraph');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the paragraph
function updateParagraph() {
    paragraphElement.textContent = paragraphs[currentIndex];
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === paragraphs.length - 1;
}

// Event listeners
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateParagraph();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < paragraphs.length - 1) {
        currentIndex++;
        updateParagraph();
    }
});

// Initialize
updateParagraph();