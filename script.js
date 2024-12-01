// Paragraph data for each person
const data = {
    person1: [
        "First person - Year 1: Overview of the journey.",
        "First person - Year 2: A significant milestone.",
        "First person - Year 3: Challenges faced.",
        "First person - Year 4: The conclusion."
    ],
    person2: [
        "Second person - Year 1: Beginnings.",
        "Second person - Year 2: Growth and learning.",
        "Second person - Year 3: A memorable achievement.",
        "Second person - Year 4: Reflection and future plans."
    ],
    person3: [
        "First person - Year 1: Overview of the journey.",
        "First person - Year 2: A significant milestone.",
        "First person - Year 3: Challenges faced.",
        "First person - Year 4: The conclusion."
    ],
    person4: [
        "Second person - Year 1: Beginnings.",
        "Second person - Year 2: Growth and learning.",
        "Second person - Year 3: A memorable achievement.",
        "Second person - Year 4: Reflection and future plans."
    ],
    person5: [
        "Second person - Year 1: Beginnings.",
        "Second person - Year 2: Growth and learning.",
        "Second person - Year 3: A memorable achievement.",
        "Second person - Year 4: Reflection and future plans."
    ],
    person6: [
        "First person - Year 1: Overview of the journey.",
        "First person - Year 2: A significant milestone.",
        "First person - Year 3: Challenges faced.",
        "First person - Year 4: The conclusion."
    ],
    person7: [
        "Second person - Year 1: Beginnings.",
        "Second person - Year 2: Growth and learning.",
        "Second person - Year 3: A memorable achievement.",
        "Second person - Year 4: Reflection and future plans."
    ]
};

// Initialize progress tracking
const progressState = {
    person1: 0,
    person2: 0,
    person3: 0,
    person4: 0,
    person5: 0,
    person6: 0,
    person7: 0
};

// Function to update UI for a specific person
function updateUI(person) {
    const paragraphs = data[person];
    const currentIndex = progressState[person];

    // Update paragraph text
    const paragraphElement = document.querySelector(`#${person}paragraph`);
    paragraphElement.textContent = paragraphs[currentIndex];

    // Enable/Disable buttons
    const prevBtn = document.querySelector(`#${person}prevBtn`);
    const nextBtn = document.querySelector(`#${person}nextBtn`);
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === paragraphs.length - 1;

    // Update progress bar
    const circles = document.querySelectorAll(`.${person}circle`);
    const indicator = document.querySelector(`.${person}indicator`);
    circles.forEach((circle, index) => {
        if (index <= currentIndex) {
            circle.classList.add("completed");
        } else {
            circle.classList.remove("completed");
        }
    });

    const progressPercentage = (currentIndex / (paragraphs.length - 1)) * 100;
    indicator.style.width = `${progressPercentage}%`;
}

// Add event listeners for a person's buttons
function setupListeners(person) {
    const prevBtn = document.querySelector(`#${person}prevBtn`);
    const nextBtn = document.querySelector(`#${person}nextBtn`);

    prevBtn.addEventListener("click", () => {
        if (progressState[person] > 0) {
            progressState[person]--;
            updateUI(person);
        }
    });

    nextBtn.addEventListener("click", () => {
        if (progressState[person] < data[person].length - 1) {
            progressState[person]++;
            updateUI(person);
        }
    });
}

// Initialize each person's progress
function initializePerson(person) {
    updateUI(person);
    setupListeners(person);
}

// Initialize components
initializePerson("person1");
initializePerson("person2");
initializePerson("person3");
initializePerson("person4");
initializePerson("person5");
initializePerson("person6");
initializePerson("person7");